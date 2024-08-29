
import Cards from '../components/Home/Cards';
import { IoMdAdd } from "react-icons/io";


export default function AllTasks() {
  return (
    <>
      <div className='w-full flex justify-end px-4'>
        <IoMdAdd className='text-2xl hover:text-gray-600 transation-all duration-100'/>
      </div>
      <Cards home="true"/></>
  )
}
