import React, { useState } from "react";
import axios from "axios";

interface GroupData {
    name: string,
    description: string,
    access: string
}

export default function useGroup(): {
    loading: Boolean,
    error: string,
    info: string,
    addGroup: (data: GroupData) => Promise<void>
} {
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<string>("");
    const [info, setInfo] = useState<string>("");

    const addGroup = async (data: GroupData) => {
        try {
            setLoading(true);
            
            const res = await axios.post('http://localhost:4000/group/create', data, {
                withCredentials: true
            });

            if(res.status ==  200) {
                setInfo(res.data.info);
            }

        } catch (error: any) {
            setError(error.response.data)
        } finally {
            setLoading(false);
        }
    }

    return {loading, error, info, addGroup}
}
