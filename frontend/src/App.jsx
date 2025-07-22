import React from "react";
import { Route, Routes } from "react-router-dom";
import Items from "./Items";
import Cart from "./Cart";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/items" element={<Items />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
};

export default App;
