import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.tsx";

export function useAuth() {
    const value = useContext(AuthContext);
    return value;
}