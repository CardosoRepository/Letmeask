import React from "react";
import { Button } from "../components/Button.tsx";
import '../styles/auth.scss';

export function NewRoom() {
    const illustrationImg = require("../assets/images/illustration.png");
    const logoImg = require("../assets/images/logo.png");
    const googleIconImg = require("../assets/images/google-icon.png");

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
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <a href="#">Clique aqui</a></p>
                </div>
            </main>
        </div>
    );
}
