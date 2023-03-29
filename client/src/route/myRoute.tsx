import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import App from '../App'
import From from '../pages/form'
import index from '../pages/index'

const MyRoute =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={index}/>
                <Route path="/create" Component={From}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoute