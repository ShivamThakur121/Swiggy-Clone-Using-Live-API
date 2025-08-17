import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home";
import Restaurant from "./component/Restaurant";
import {BrowserRouter, Routes, Route} from "react-router";
import { useState } from "react";
import RestaurantMenu from "./component/RestaurantMenu";
import SearchFood from "./component/SearchFood";
import SecondaryHome from "./component/SecondaryHome";
import { store } from "./Stored/stories";
import { Provider } from "react-redux";
import Checkout from "./component/Checkout";

function App(){


    return(
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
            <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
            </Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}




ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);