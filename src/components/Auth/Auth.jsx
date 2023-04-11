import React, { useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';
import { AiFillMail, AiFillLock, AiOutlineClose } from "react-icons/ai";

import './auth.css';

export function Auth(){
    const [nickname, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false);
    
    const handleTogglePasswordVisibility = (e) => {
        e.preventDefault();
        setPasswordVisible(prevState => !prevState);
    };
    async function auth(e) {
        e.preventDefault();
        const authResult = await axios.post('http://45.12.237.227:3001/api/admin/login', {
            nickname,
            password
        })
        localStorage.setItem('tokenLogin', authResult.data.session)
        window.location.reload();
    }
    const [clickCount, setClickCount] = useState(0);
    const handleClick = () => {
        setClickCount(clickCount + 1);
        if (clickCount === 2) {
          setClickCount(0);
          window.location.href = '/';
        }
      };
    return (
        <div className="body">
            <header>
                <h2 onClick={handleClick} className="logo">WTC Москва</h2>
                {/* <button data-modal className="btnLogin-popup">Вход</button> */}
            </header>
            <div className="wrapper">
                {/* <span className="icon-close" data-close>
                    <AiOutlineClose name="close"></AiOutlineClose>
                </span> */}
                <div className="form-box login">
                    <h2>Вход</h2>
                    <form>
                        <div className="input-box">
                            <span className="icon">
                                <AiFillMail name="mail"/>
                            </span>
                            <input required type="text" id="emai" value={nickname} onChange={e => setLogin(e.target.value)}/>
                            <label>Логин</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <button className="password_change" onClick={handleTogglePasswordVisibility}>
                                    <AiFillLock name="lock-closed"></AiFillLock>
                                </button>
                            </span>
                            <input required type={passwordVisible ? 'text' : 'password'} id="passwd"  value={password}  onChange={e => setPassword(e.target.value)}/>
                            <label>Пароль</label>
                        </div>
                        
                    </form>
                    <button className="btn" type="submit" onClick={(e) => {auth(e)}}>Войти</button>
                </div>
            </div>
        </div>
    )
}