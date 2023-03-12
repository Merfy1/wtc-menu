import React, { useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';

export function Auth(){
    const [nickname, setLogin] = useState('')
    const [password, setPassword] = useState('')
    async function auth(  ) { 
        const authResult = await axios.post('http://localhost:3001/api/admin/login', {
            nickname,
            password
        })
        localStorage.setItem('tokenLogin', authResult.data.session)
    }

    return (
        <div>
            <input type="text" value={nickname} onChange={e => setLogin(e.target.value)}/>
            <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={() => {auth()}}></button>
        </div>
    )
}