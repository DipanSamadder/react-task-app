import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../components/Home/Cards";

export default function InCompltedTasks() {
  const [dataItems, setDataItems] = useState();

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1000/api/v2/get-incomplete-task",
          { headers }
        );
        setDataItems(res.data.data);
        console.log(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [headers]);

  return <div>{dataItems && <Cards home="false" data={dataItems} />}</div>;
}
