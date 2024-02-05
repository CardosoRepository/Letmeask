import React from "react";
import { useParams } from "react-router-dom";

import { Question } from "../components/Question/question-index.tsx";
import { Button } from "../components/Button.tsx";
import { RoomCode } from "../components/RoomCode.tsx";
import "../styles/room.scss";
// import { useAuth } from "../hooks/useAuth.ts";
import { useRoom } from "../hooks/useRoom.ts";

type roomParams = {
    id: string;
};

export function AdminRoom() {
    // const { user } = useAuth();
    const params = useParams<roomParams>();
    const roomId = params.id;
    const logoImg = require("../assets/images/logo.png");
    const { questions, title } = useRoom(roomId ?? "");


    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined>Encerrar sala</Button>
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
                            />
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
