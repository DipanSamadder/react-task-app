import React from 'react'
import { CiHeart } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";


export default function Cards({home}) {
    const data = [
        {
            title:"Haryana Post 1",
            desc:"This Website belongs to Haryana Postal Circle, Department of Posts, Ministry of Communications, Governement of India ",
            status: "In Complete",
        },
        {
            title:"Haryana Post 2",
            desc:"This Website belongs to Haryana Postal Circle, Department of Posts, Ministry of Communications, Governement of India ",
            status: "In Complete",
        },
        {
            title:"Haryana Post 3",
            desc:"This Website belongs to Haryana Postal Circle, Department of Posts, Ministry of Communications, Governement of India ",
            status: "Completed",
        },
        {
            title:"Haryana Post 4",
            desc:"This Website belongs to Haryana Postal Circle, Department of Posts, Ministry of Communications, Governement of India ",
            status: "In Complete",
        },
    ];
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
      {data.map((item, i)=> (
        <div className='flex flex-col justify-between p-5 border rounded-lg bg-gray-700 border-gray-800 ' key={i}>

            <div>
              <h5 className='text-xl font-semibold'>{item.title}</h5>
              <p className='text-gray-300 my-2'>{item.desc}</p>
            </div>
            <div className='flex justify-between'>
              <button className={` ${item.status ==="Completed" ? "bg-green-600" : "bg-red-600" } text-sm text-white py-1 px-4 rounded hover:bg-green-800 mt-2`}>{ item.status } </button>
              <div className='flex justify-center space-x-4 text-2xl font-semibold justify-around'>
                <button className='hover:text-orange-600'><CiHeart /></button>
                <button className='hover:text-blue-700'><CiEdit /></button>
                <button className='hover:text-red-700'><MdDelete /></button>
              </div>
            </div>
   
        </div>
      ))}
      { home === "true" && (
        <div className='bg-gray-800 rounded-xl flex flex-col justify-center items-center text-center text-xl hover:scale-105 hover:cursor-pointer transation-all duration-300'>
          <IoMdAdd className='text-center text-3xl'/>
          Add New
        </div>
      )}
    </div>
  )
}
