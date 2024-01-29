import React from "react";
import { Home } from "./pages/Home.tsx";
import { NewRoom } from "./pages/NewRoom.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/rooms/new" Component={NewRoom}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;