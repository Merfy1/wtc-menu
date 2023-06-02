import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminUser } from './AdminUser';

export function AdminCreateUser (){
    const [ShowComponent, setShowComponent] = useState(false);
    const [userName, setUserName] = useState('');
    const [userLastname, setUserLastname] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userNick, setUserNick] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleCreateCategory = async () => {
        const token = localStorage.getItem('tokenLogin'); // получаем токен из localStorage
        function validatePassword(userPassword) {
            // Проверяем длину пароля
            if (userPassword.length < 8) {
              return false;
            }

            // Проверяем, содержит ли пароль цифры
            if (!/\d/.test(userPassword)) {
              return false;
            }
            
            // Проверяем, содержит ли пароль специальные символы
            if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(userPassword)) {
              return false;
            }
          
            return true;
        }
        try {
          if(validatePassword(userPassword)){
            const response = await axios.post('http://localhost:3001/api/admin/user/create/',
                {
                    name: userName,
                    lastname: userLastname,
                    surname: userSurname,
                    nickname: userNick,
                    password: userPassword,
                    tocken: token,
                }
            );
            setShowComponent(true);
          }
          else {
            alert('Пароль должен содержать не менее 8 символов, цифры и специальные символы.');
          }
        } catch (error) {
          console.error(error); // выводим ошибку в консоль
        }

    };
    const handleClick = () => {
        setShowComponent(true);
    };
    return (
        <>
            {ShowComponent ? (
                <AdminUser/>
            ) : (
                <div className="main">
                    <div className="main-container">
                        <div className="main-wrapper">
                            <button className="main-header__back" onClick={handleClick}>
                                <BiArrowBack/> Назад
                            </button>
                            <div className="main-header">
                                <span className="main-header__title">
                                    Создание
                                </span>
                                <button className="main-header__button" onClick={handleCreateCategory}>
                                    <span><BiCheck/></span>
                                    Сохранить
                                </button>
                            </div>
                            <div className="table-wrapper">
                                <form className='main-form'> 
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">Имя</span>
                                        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" className="main-form__input"/>
                                    </div>
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">Фамилия</span>
                                        <input value={userLastname} onChange={(e) => setUserLastname(e.target.value)} type="text" className="main-form__input"/>
                                    </div> 
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">Отчество</span>
                                        <input value={userSurname} onChange={(e) => setUserSurname(e.target.value)} type="text" className="main-form__input"/>
                                    </div> 
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">Логин</span>
                                        <input value={userNick} onChange={(e) => setUserNick(e.target.value)} type="text" className="main-form__input"/>
                                    </div> 
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">Пароль</span>
                                        <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="text" className="main-form__input"/>
                                    </div>      
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
                )
            } 
        </>
    );
};