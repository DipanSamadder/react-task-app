import axios from "axios";
import React from "react";
import { CiEdit, CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export default function Cards({
  home,
  setInputModal,
  data,
  setUpdateData,
  setCreateForm,
}) {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  //completed Handle
  const handleCompleteBtn = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:1000/api/v2/complete-task/${id}`,
        {},
        { headers }
      );
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  //Handle Important Button
  const handleImportantBtn = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:1000/api/v2/important-task/${id}`,
        {},
        { headers }
      );
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  //Delete Handle button
  const handleDeleteBtn = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:1000/api/v2/delete-task/${id}`,
        { headers }
      );
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  //Update button Handle
  const handleUpdateBtn = async (id, title, desc) => {
    setInputModal("fixed");
    setUpdateData({ id: id, title: title, desc: desc });
    setCreateForm(false);
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data !== undefined &&
        data.map((item, i) => (
          <div
            className="flex flex-col justify-between p-5 border rounded-lg bg-gray-700 border-gray-800 "
            key={i}
          >
            <div>
              <h5 className="text-xl font-semibold">{item.title}</h5>
              <p className="text-gray-300 my-2">{item.desc}</p>
            </div>
            <div className="flex justify-between">
              <button
                className={`${
                  item.complete === true ? "bg-green-600" : "bg-red-600"
                } text-sm text-white py-1 px-4 rounded hover:bg-green-800 mt-2`}
                onClick={() => handleCompleteBtn(item._id)}
              >
                {item.complete == true ? "Completed" : "In complete"}
              </button>
              <div className="flex justify-center space-x-4 text-2xl font-semibold justify-around">
                <button
                  className="hover:text-orange-600"
                  onClick={() => handleImportantBtn(item._id)}
                >
                  {item.important === false ? (
                    <CiHeart />
                  ) : (
                    <FaHeart className="text-orange-700" />
                  )}
                </button>
                <button
                  className="hover:text-blue-700"
                  onClick={() =>
                    handleUpdateBtn(item._id, item.title, item.desc)
                  }
                >
                  <CiEdit />
                </button>
                <button
                  className="hover:text-red-700"
                  onClick={() => handleDeleteBtn(item._id)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      {home === "true" && (
        <button
          onClick={() => {
            setInputModal("fixed");
            setCreateForm(true);
            setUpdateData({ title: "", desc: "" });
          }}
          className="bg-gray-800 rounded-xl flex flex-col justify-center items-center text-center text-xl hover:scale-105 hover:cursor-pointer transation-all duration-300"
        >
          <IoMdAdd className="text-center text-3xl" />
          Add New
        </button>
      )}
    </div>
  );
}
