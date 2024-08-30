
import Cards from '../components/Home/Cards';
import { IoMdAdd } from "react-icons/io";
import InputData from '../components/InputData';
import { useState } from 'react';


export default function AllTasks() {
  const [inputModal, setInputModal] = useState('hidden');
  return (
    <>
    <div>
      <div className='w-full flex justify-end px-4' onClick={()=> setInputModal('fixed')}>
        <IoMdAdd className='text-2xl hover:text-gray-600 transation-all duration-100'/>
      </div>
      <Cards home="true" setInputModal={setInputModal}/>
    </div>
    <InputData inputModal={inputModal} setInputModal={setInputModal}/>
    </>
  )
}
