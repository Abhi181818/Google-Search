import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
const Navbar = () => {
    return (
        <div className='p-5 pb-5 flex flex-wrap sm:justify-between justify-center items-center border-b'>
            <div className='flex  justify-between items-center space-x-5 w-screen'>
                <Link to='/'>
                    <div className=' flex text-2xl bg-white-500 font-bold text-white py-1 px-2 rounded'>
                            <h1 className=' text-blue-500'>G</h1>
                            <h1 className=' text-red-500 '>o</h1>
                            <h1 className=' text-yellow-500 '>o</h1>
                            <h1 className=' text-blue-500 '>g</h1>
                            <h1 className=' text-green-500 '>l</h1>
                            <h1 className=' text-red-500 '>e</h1>
                    </div>
                </Link>
            </div>
            <Search />
        </div>
    )
}

export default Navbar
