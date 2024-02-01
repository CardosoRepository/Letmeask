import React, { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

import logoImg from "../assets/images/logo.png";
import { Button } from "../components/Button.tsx";
import { RoomCode } from "../components/RoomCode.tsx";
import "../styles/room.scss";
import { useAuth } from "../hooks/useAuth.ts";
import { database } from "../services/firebase.ts";

type roomParams = {
    id: string;
};

export function Room() {
    const { user } = useAuth();
    const params = useParams<roomParams>();
    const roomId = params.id;
    const [newQuestion, setNewQuestion] = useState("");

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();
        
        if (newQuestion.trim() === "") {
            return;
        }

        if (!user) {
            throw new Error("You must be loged in");
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false,
        };

        await database.ref(`rooms/${roomId}/questions`).push(question);
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={roomId} />
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
                </div>
                <form onSubmit={handleSendQuestion}>
                    <textarea
                        placeholder="O que você quer perguntar?"
                        onChange={(event) => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />
                    <div className="form-footer">
                        <span>
                            Para enviar uma pergunta,{" "}
                            <button>faça seu login</button>.
                        </span>
                        <Button type="submit" disabled={!user}>Enviar pergunta</Button>
                    </div>
                </form>
            </main>
        </div>
    );
}
