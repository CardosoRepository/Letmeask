import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Question } from "../components/Question/question-index.tsx";
import { Button } from "../components/Button.tsx";
import { RoomCode } from "../components/RoomCode.tsx";
import "../styles/room.scss";
// import { useAuth } from "../hooks/useAuth.ts";
import { useRoom } from "../hooks/useRoom.ts";
import { database } from "../services/firebase.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type roomParams = {
    id: string;
};

export function AdminRoom() {
    // const { user } = useAuth();
    const params = useParams<roomParams>();
    const roomId = params.id;
    const navigate = useNavigate();
    const logoImg = require("../assets/images/logo.png");
    const { questions, title } = useRoom(roomId ?? "");

    async function handleEndRoom() {
        if (window.confirm("Tem certeza que você deseja encerrar essa sala?")) {
            await database.ref(`rooms/${roomId}`).update({
                endedAt: new Date(),
            });
            navigate("/");
        }
    }

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm("Tem certeza que você deseja excluir essa pergunta?")) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                    </div>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && (
                        <span>{questions.length} pergunta(s)</span>
                    )}
                </div>
                <div className="question-list">
                    {questions.map((question) => {
                        return (
                            <Question
                                key={question.id}
                                content={question?.content ?? ""}
                                author={
                                    question?.author ?? { name: "", avatar: "" }
                                }
                            >
                                <button type="button" onClick={() => handleDeleteQuestion(question.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </Question>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
