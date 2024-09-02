import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
export default function InputData({
  inputModal,
  setInputModal,
  updateData,
  createForm,
}) {
  const [inData, setInDate] = useState({ title: "", desc: "" });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInDate({ ...inData, [name]: value });
  };

  useEffect(() => {
    setInDate({ title: updateData.title, desc: updateData.desc });
  }, [updateData]);

  //handle form submittion
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (inData.title == null && inData.des == null) {
        alert("All fields are required");
      } else {
        if (createForm == true) {
          const res = await axios.post(
            "http://localhost:1000/api/v2/create-task",
            inData,
            { headers }
          );
          alert(res.data.message);
        } else {
          const res = await axios.put(
            `http://localhost:1000/api/v2/update-task/${updateData.id}`,
            inData,
            { headers }
          );
          alert(res.data.message);
        }
        setInputModal("hidden");
        setInDate({ title: "", desc: "" });
      }
    } catch (error) {}
  };

  return (
    <>
      <div
        className={`${inputModal} top-0 left-0 bg-gray-600 opacity-80 h-screen w-full`}
      ></div>
      <div
        className={`${inputModal} top-0 left-0 flex h-screen items-center justify-center w-full`}
      >
        <div className="w-6/12 bg-gray-800 rounded-xl p-6">
          <div
            className="flex justify-end text-xl p-2"
            onClick={() => setInputModal("hidden")}
          >
            <button>
              <RxCross2 />
            </button>
          </div>
          <form onSubmit={handleSubmit} method="post">
            <input type="hidden" name="createForm" value={createForm} />
            <input
              type="text"
              name="title"
              value={inData.title}
              onChange={change}
              className="p-2 text-xl w-full rounded-md bg-gray-600"
              placeholder="Title"
            />
            <textarea
              type="text"
              name="desc"
              value={inData.desc}
              onChange={change}
              className="p-2 text-xl w-full rounded-md bg-gray-600 my-3"
              placeholder="Desc"
              cols="10"
              rows="12"
            ></textarea>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
