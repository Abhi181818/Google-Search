// import { Result } from 'postcss'
import React from 'react'
import Results from './Results';
import { Routes, Route, Navigate } from 'react-router-dom'
const Rout = () => {
    return (
        <div className='p-4'>
            <Routes>
                <Route exact path='/' element={<Navigate to="/search" />}>
                </Route>
                <Route exact path='/search' element={<Results />}></Route>
                <Route exact path='/images' element={<Results />}></Route>
                <Route exact path='/news' element={<Results />}></Route>
                <Route exact path='/videos' element={<Results />}></Route>
            </Routes>
        </div>
    )
}

export default Rout
