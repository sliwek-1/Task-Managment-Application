import { loadavg } from "os";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { useAppDispatch } from "./hooks";
import { login } from "../slices/loginSlice";
import { useNavigate } from "react-router-dom";

interface LoginData {
    email: string,
    password: string
}

export default function useLogin(): {
    error: string,
    info: string,
    loading: boolean,
    loginForm: (data: LoginData) => Promise<void>
} {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | any>("")
    const [info, setInfo] = useState("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const loginForm = async (data: LoginData) => {
        try {
            setLoading(true)

            const res = await axios.post('http://localhost:4000/user/login', data, {
                withCredentials: true
            });

            if(res.status ==  200) {
                const parseData = {
                    name: res.data.name,
                    surrname: res.data.surname,
                    login: res.data.login,
                    email: res.data.email,
                    uniqueId: res.data.uniqueId,
                }

                dispatch(login(parseData));
                setInfo(res.data.info);
                navigate("/");
            }

        } catch (error: any) {
            setError(error.response.data)
        } finally {
            setLoading(false)
        }
    }

    return {error, info, loading, loginForm}
}