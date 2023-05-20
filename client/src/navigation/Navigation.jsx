import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../Components/Home/Home"
import { CardDetail } from "../Components/CardDetail/CardDetail"



export function Navigation () {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card/:id" element={<CardDetail />} />
        </Routes>
    )
}