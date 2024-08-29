
import Sidebar from '../components/Home/Sidebar';
import { Outlet } from 'react-router-dom';
export default function Home({children}) {
  return (
    <div className='flex h-[98vh] space-x-3'>
      <div className='w-1/6 border border-gray-600 rounded-xl p-4 flex flex-col justify-between'><Sidebar/></div>
      <div className='w-5/6 border border-gray-600 rounded-xl p-4'><Outlet/></div>
    </div>
  )
}
