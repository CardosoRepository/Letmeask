import React from "react";
import "../styles/room-code.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

type RoomCodeProps = {
    code: string | undefined;
};

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code || '');
    }
    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </div>
            <span>Sala {props.code}</span>
        </button>
    )
}
