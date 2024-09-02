import axios from "axios";
import React, { useEffect, useState } from "react";
import { CgNotes } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../stores/auth";

export default function Sidebar() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [dataItems, setDataItems] = useState({});

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const data = [
    {
      title: "All Tasks",
      icons: <CgNotes />,
      link: "/",
    },
    {
      title: "Important Tasks",
      icons: <CgNotes />,
      link: "/incompleted-tasks",
    },
    {
      title: "Completed Tasks",
      icons: <CgNotes />,
      link: "/completed-tasks",
    },
    {
      title: "Incompleted Tasks",
      icons: <CgNotes />,
      link: "/important-tasks",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1000/api/v2/get-all-task",
          { headers }
        );
        setDataItems(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [headers]);

  const logout = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    history("/signin");
  };

  return (
    <>
      {/*Sidebar login user details*/}
      {dataItems && (
        <div>
          <h5>{dataItems.name}</h5>
          <p>{dataItems.email}</p>
          <hr className="border-gray-500 mt-2" />
        </div>
      )}

      {/** Nav Items */}
      <div className="flex flex-col ">
        {data.map((item, key) => (
          <Link
            key={key}
            to={item.link}
            className="flex space-x-2 items-center hover:bg-gray-800 rounded transition-all duration-2 p-2"
          >
            {item.icons} <p>{item.title}</p>
          </Link>
        ))}
      </div>

      {/**Login out Button*/}
      <div>
        <button className="bg-gray-800 w-full  rounded py-2" onClick={logout}>
          Logout
        </button>
      </div>
    </>
  );
}
