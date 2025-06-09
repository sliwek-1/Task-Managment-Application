import React, { useState } from "react";
import axios from "axios";

interface RegisterData{
    name: string,
    surname: string,
    login: string,
    email: string,
    password: string,
    passwordConfirmation: string
}

export default function useRegister(): {
    error: string,
    info: string,
    loading: boolean,
    registerForm: (data: RegisterData) => Promise<void>
} {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [info, setInfo] = useState("");

    const registerForm = async (data: RegisterData) => {
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:4000/user/register", data, {
                withCredentials: true
            });

            if(response.status == 200) {
                setInfo(response.data)
            }

        } catch (error: any) { 
            setError(error.response.data)
        } finally {
            setLoading(false);
        }
    }

    return {error, info, loading, registerForm}
}