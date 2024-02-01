import React from "react";
import copyImg from "../assets/images/copy.png";
import "../styles/room-code.scss";

export function RoomCode() {
    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #21321321</span>
        </button>
    )
}
