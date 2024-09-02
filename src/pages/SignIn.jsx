import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [data, setData] = useState({ email: "", password: "" });
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate("/");
  }

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!data.email || !data.password) {
        alert("User name and password required fields");
        return;
      }

      console.log("Data being sent:", data);

      const res = await axios.post(
        "http://localhost:1000/api/v1/signin",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("id", res.data.id);
      localStorage.setItem("token", res.data.token);
      setData({ email: "", password: "" });
      navigate("/");

      // Handle successful response (e.g., redirect to another page, store user info, etc.)
    } catch (error) {
      if (error.response) {
        console.error(
          "Server responded with status code",
          error.response.status
        );
        alert(error.response.data.message);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }
  };

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="w-2/6  border-gray-600 rounded-xl p-4">
        <div className="bg-gray-500 rounded-md p-5">
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl mb-3">Sign In</h3>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={change}
              value={data.email}
              className="bg-gray-300 px-3 py-2 rounded w-full mb-3"
            />
            <input
              type="password"
              name="password"
              onChange={change}
              value={data.password}
              placeholder="Password"
              className="bg-gray-300 px-3 py-2 rounded w-full mb-3"
            />
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-green-500 py-2 px-3 rounded-md hover:bg-green-600 text-7"
              >
                Sign In
              </button>
              <div className="text-gray-300">
                Do you haven't account?{" "}
                <Link to="/signup" className="hover:text-gray-100">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
