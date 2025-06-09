import React, { useState, useCallback } from "react";
import axios from "axios";
import { useAppSelector } from "./hooks";

export default function useAuth() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [info, setInfo] = useState("");
    const auth = useCallback(async () => {
        try {
            setLoading(true);
            const res = await axios.get("http://localhost:4000/auth/authLogin", {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(res.status == 200) {
                console.log(res);
            }

        } catch (error: any) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [])

    return {loading, info, error, auth}
}