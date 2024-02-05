import React from "react";
import { Home } from "./pages/Home.tsx";
import { NewRoom } from "./pages/NewRoom.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from './contexts/AuthContext.tsx';
import { Room } from "./pages/Room.tsx";
import { AdminRoom } from "./pages/AdminRoom.tsx";

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/rooms/new" Component={NewRoom}></Route>
                    <Route path="/rooms/:id" Component={Room}></Route>
                    <Route path="/admin/rooms/:id" Component={AdminRoom}></Route>
                </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;