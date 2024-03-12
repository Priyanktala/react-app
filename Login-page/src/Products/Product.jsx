import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'

import Addproduct from './Addproduct'
import ViewProduct from './ViewProduct';

const Product = () => {
    return (
        <>
            <Navbar />
            <Addproduct />
            {/* <ViewProduct /> */}
            <Cards />
        </>
    )
}

export default Product