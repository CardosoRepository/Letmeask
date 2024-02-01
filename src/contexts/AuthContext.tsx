import React, { ReactNode, createContext, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase.ts";
export const AuthContext = createContext({} as AuthContextType);

type UserType = {
    id: string;
    name: string;
    avatar: string;
};

type AuthContextType = {
    user: UserType | undefined;
    signInWithGoogle: () => Promise<void>;
};

type AuthContextProviderProps = {
    children: ReactNode;
};

export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser] = useState<UserType>();

    useEffect(() => {
        // Se houver um login, os dados do usuário são reatribuídos
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, photoURL, uid } = user;

                if (!displayName || !photoURL) {
                    throw new Error("Missing information from Google Account.");
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL,
                });
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider);

        if (res.user) {
            const { displayName, photoURL, uid } = res.user;

            if (!displayName || !photoURL) {
                throw new Error("Missing information from Google Account.");
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL,
            });
        }
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}
