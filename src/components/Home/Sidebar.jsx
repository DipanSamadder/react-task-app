import React from 'react'
import { CgNotes } from "react-icons/cg";
import { Link } from 'react-router-dom';


export default function Sidebar() {
  const data= [

    {
      title: "All Tasks",
      icons: <CgNotes />,
      link:'/',
    },
    {
      title: "Important Tasks",
      icons: <CgNotes />,
      link:'/incompleted-tasks',
    },
    {
      title: "Completed Tasks",
      icons: <CgNotes />,
      link:'/completed-tasks',
    },
    {
      title: "Incompleted Tasks",
      icons: <CgNotes />,
      link:'/important-tasks',
    },
  ];

  return (
    <>
      {/*Sidebar login user details*/}
      <div>
          <h5>Dipan Samadder</h5>
          <p>dipan@gmail.com</p>
          <hr className='border-gray-500 mt-2'/>
      </div>
      {/** Nav Items */}
      <div className='flex flex-col '>
          {data.map((item, key) => (
            <Link key={key} to={item.link} className='flex space-x-2 items-center hover:bg-gray-800 rounded transition-all duration-2 p-2'>{item.icons} <p>{item.title}</p></Link>
          ))}
      </div>

      {/**Login out Button*/}
      <div>
        <button className='bg-gray-800 w-full  rounded py-2'>Logout</button>
      </div>
    </>
  )
}
