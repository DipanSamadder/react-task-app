import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Cards from "../components/Home/Cards";
import InputData from "../components/InputData";

export default function AllTasks() {
  const [inputModal, setInputModal] = useState("hidden");
  const [dataItems, setDataItems] = useState({});
  const [updateData, setUpdateData] = useState({ id: "", title: "", desc: "" });
  const [createForm, setCreateForm] = useState(true);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

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

  return (
    <>
      <div>
        <div
          className="w-full flex justify-end px-4"
          onClick={() => setInputModal("fixed")}
        >
          <IoMdAdd className="text-2xl hover:text-gray-600 transation-all duration-100" />
        </div>
        {dataItems.tasks && (
          <Cards
            home="true"
            setInputModal={setInputModal}
            data={dataItems.tasks}
            setUpdateData={setUpdateData}
            setCreateForm={setCreateForm}
          />
        )}
      </div>
      <InputData
        inputModal={inputModal}
        setInputModal={setInputModal}
        updateData={updateData}
        createForm={createForm}
      />
    </>
  );
}
