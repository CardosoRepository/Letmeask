import React, { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Question } from "../components/Question/question-index.tsx";
import { Button } from "../components/Button.tsx";
import { RoomCode } from "../components/RoomCode.tsx";
import "../styles/room.scss";
import { useAuth } from "../hooks/useAuth.ts";
import { database } from "../services/firebase.ts";
import { useRoom } from "../hooks/useRoom.ts";

type roomParams = {
    id: string;
};

export function Room() {
    const { user } = useAuth();
    const params = useParams<roomParams>();
    const roomId = params.id;
    const [newQuestion, setNewQuestion] = useState("");
    const logoImg = require("../assets/images/logo.png");
    const { questions, title } = useRoom(roomId ?? "");

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
        setNewQuestion("");
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
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && (
                        <span>{questions.length} pergunta(s)</span>
                    )}
                </div>
                <form onSubmit={handleSendQuestion}>
                    <textarea
                        placeholder="O que você quer perguntar?"
                        onChange={(event) => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />
                    <div className="form-footer">
                        {user ? (
                            <div className="user-info">
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <span>
                                Para enviar uma pergunta,{" "}
                                <button>faça seu login</button>.
                            </span>
                        )}
                        <Button type="submit" disabled={!user}>
                            Enviar pergunta
                        </Button>
                    </div>
                </form>
                <div className="question-list">
                    {questions.map((question) => {
                        return (
                            <Question
                                key={question.id}
                                content={question?.content ?? ""}
                                author={question?.author ?? { name: "", avatar: "" }}
                            />
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
