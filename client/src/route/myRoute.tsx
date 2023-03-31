import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import App from '../App'
import From from '../pages/form'
import Index from '../pages/index'
import _slug from '../pages/_slug';

const MyRoute =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/create" element={<From/>}/>
                <Route path="/blog/:slug" element={<_slug/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoute