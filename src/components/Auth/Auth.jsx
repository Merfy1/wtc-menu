import React, { useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';
import { AiFillMail, AiFillLock, AiOutlineClose } from "react-icons/ai";

import './auth.css';

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
        <div className="body">
            <header>
                <h2 className="logo">WTC Москва</h2>
                <button data-modal className="btnLogin-popup">Вход</button>
            </header>
            <div className="wrapper">
                <span className="icon-close" data-close>
                    <AiOutlineClose name="close"></AiOutlineClose>
                </span>
                <div className="form-box login">
                    <h2>Вход</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon">
                                <AiFillMail name="mail"/>
                            </span>
                            <input required type="text" id="emai" value={nickname} onChange={e => setLogin(e.target.value)}/>
                            <label>Логин</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <AiFillLock name="lock-closed"></AiFillLock>
                            </span>
                            <input required type="text" id="passwd" value={password} onChange={e => setPassword(e.target.value)}/>
                            <label>Пароль</label>
                        </div>
                        <button className="btn" type="submit" onClick={() => {auth()}}>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}