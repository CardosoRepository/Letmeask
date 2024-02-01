import React, { FormEvent, useState } from "react";
import { Button } from "../components/Button.tsx";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.scss";
import { database } from "../services/firebase.ts";
import { useAuth } from "../hooks/useAuth.ts";

export function NewRoom() {
    const illustrationImg = require("../assets/images/illustration.png");
    const logoImg = require("../assets/images/logo.png");
    const { user } = useAuth();
    const [newRoom, setNewRoom] = useState("");
    const navigate = useNavigate();

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();
        if (newRoom.trim() === '') {
            return;
        }
        
        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        });

        navigate(`/rooms/${firebaseRoom.key}`);
    }

    return (
        <div id="page-auth">
            <aside>
                <img
                    src={illustrationImg}
                    alt="Ilustração simbolizando perguntas e respostas"
                />
                <strong>Crie salas de Q&A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={(event) => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente?{" "}
                        <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
