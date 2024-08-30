import React from 'react'
import { RxCross2 } from "react-icons/rx";

export default function InputData({inputModal, setInputModal}) {
  return (
    <>
    <div className={`${inputModal} top-0 left-0 bg-gray-600 opacity-80 h-screen w-full`}></div>
    <div className={`${inputModal} top-0 left-0 flex h-screen items-center justify-center w-full`}>
        <div className='w-6/12 bg-gray-800 rounded-xl p-6'>
                <div className='flex justify-end text-xl p-2' onClick={()=>setInputModal('hidden')}><button><RxCross2 /></button></div>
                <input type="text" name="title" className='p-2 text-xl w-full rounded-md bg-gray-600' placeholder='Title'/>
                <textarea type="text" name="desc" className='p-2 text-xl w-full rounded-md bg-gray-600 my-3' placeholder='Desc' cols="10" rows="12">

                </textarea>
                <button className='btn'>Submit</button>
        </div>
    </div>
    </>
  )
}
