import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const history = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    history("/");
  }

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!data.name || !data.email || !data.password) {
        alert("All fields are required");
      } else {
        const res = await axios.post(
          "http://localhost:1000/api/v1/signup",
          data
        );
        setData({ name: "", email: "", password: "" });
        alert(res.data.message);
        history("/signin");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="w-2/6  border-gray-600 rounded-xl p-4">
        <div className="bg-gray-500 rounded-md p-5">
          <form onSubmit={handelSubmit}>
            <h3 className="text-xl mb-3">Sign Up</h3>
            <input
              onChange={change}
              value={data.name}
              type="text"
              name="name"
              placeholder="Name"
              className="bg-gray-300 px-3 py-2 rounded w-full mb-3"
            />
            <input
              onChange={change}
              value={data.email}
              type="email"
              name="email"
              placeholder="Email"
              className="bg-gray-300 px-3 py-2 rounded w-full mb-3"
            />
            <input
              onChange={change}
              value={data.password}
              type="password"
              name="password"
              placeholder="Password"
              className="bg-gray-300 px-3 py-2 rounded w-full mb-3"
            />
            <div className="flex justify-between items-center">
              <button className="bg-green-500 py-2 px-3 rounded-md hover:bg-green-600 text-7">
                Sign Up
              </button>
              <div className="text-gray-300">
                Do you have account?{" "}
                <Link to="/signin" className="hover:text-gray-100">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
