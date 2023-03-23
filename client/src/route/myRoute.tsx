import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import App from '../App'
import From from '../pages/form'

const MyRoute =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={App}/>
                <Route path="/create" Component={From}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoute