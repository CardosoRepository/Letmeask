import React from "react";
import { Home } from "./pages/Home.tsx";
import { NewRoom } from "./pages/NewRoom.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from './contexts/AuthContext.tsx';

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/rooms/new" Component={NewRoom}></Route>
                </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;