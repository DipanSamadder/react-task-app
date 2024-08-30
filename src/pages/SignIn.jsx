import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <div className='flex flex-col h-full justify-center items-center'>
        <div className='w-2/6  border-gray-600 rounded-xl p-4'>
            <div className='bg-gray-500 rounded-md p-5'>
                <h3 className='text-xl mb-3'>Sign In</h3>
                <input type="email" name="email" placeholder='Email' className='bg-gray-300 px-3 py-2 rounded w-full mb-3'/>
                <input type="password" name="password" placeholder='Password' className='bg-gray-300 px-3 py-2 rounded w-full mb-3'/>
                <div className='flex justify-between items-center'>
                    <button className='bg-green-500 py-2 px-3 rounded-md hover:bg-green-600 text-7'>Sign In</button>
                    <div className='text-gray-300'>Do you haven't account? <Link to="/signup" className='hover:text-gray-100'>Sign up</Link></div>
                </div>
            </div>
        </div>
    </div>
  )
}
