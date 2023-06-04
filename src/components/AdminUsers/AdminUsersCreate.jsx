import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminUsers } from './AdminUsers';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function AdminUsersCreate () {
    const [ShowComponent, setShowComponent] = useState(false);
    const [usersName, setUsersName] = useState('');
    const [usersLastname, setUsersLastname] = useState('');
    const [usersSurname, setUsersSurname] = useState('');
    const [usersPhone, setUsersPhone] = useState('');
    const [usersDate, setUsersDate] = useState('');
    const access_token = localStorage.getItem('tokenLogin');
    const MySwal = withReactContent(Swal)

    const handleCreateRest = async () => {
        const headers = {
            Authorization: access_token,
        };
        const userstData = {
            name: usersName,
            lastname: usersLastname,
            surname: usersSurname,
            phone: usersPhone,
            dateBirsdate: usersDate,
        };
        try {
            const response = await axios.post('http://localhost:3001/api/admin/castomer/', userstData, {headers});
            setShowComponent(true);
        } catch (error) {
            console.error(error);
            MySwal.fire({
                title: <strong>Ошибка</strong>,
                html: <i>Не удалось создать ресторан</i>,
                icon: 'error'
            })
        }
    };

    const handleClick = () => {
        setShowComponent(true);
    };

    return (
        <>
            {ShowComponent ? (
                <AdminUsers/>
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
                                <button className="main-header__button" onClick={handleCreateRest}>
                                    <span><BiCheck/></span>
                                    Сохранить
                                </button>
                            </div>
                            <div className="table-wrapper">
                                <form className='main-form'> 
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">Имя</span>
                                        <input value={usersName} onChange={(e) => setUsersName(e.target.value)} type="text" className="main-form__input"/>
                                    </div>
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">Фамилия</span>
                                        <input value={usersLastname} onChange={(e) => setUsersLastname(e.target.value)} type="text" className="main-form__input"/>
                                    </div>
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">Отчество</span>
                                        <input value={usersSurname} onChange={(e) => setUsersSurname(e.target.value)} type="text" className="main-form__input"/>
                                    </div>
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">Телефон</span>
                                        <input value={usersPhone} onChange={(e) => setUsersPhone(e.target.value)} type="number" className="main-form__input"/>
                                    </div>
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">День рождения</span>
                                        <input value={usersDate} onChange={(e) => setUsersDate(e.target.value)} type="text" className="main-form__input"/>
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