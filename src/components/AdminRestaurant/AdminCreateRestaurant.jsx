import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminRestaurant } from './AdminRestaurant';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function AdminCreateRestaurant () {
    const [ShowComponent, setShowComponent] = useState(false);
    const [restName, setRestName] = useState('');
    const [restAddress, setRestAddress] = useState('');
    const [restEmail, setRestEmail] = useState('');
    const access_token = localStorage.getItem('tokenLogin');
    const MySwal = withReactContent(Swal)

    const handleCreateRest = async () => {
        const headers = {
            Authorization: access_token,
        };
        const restaurantData = {
            name: restName,
            address: restAddress,
            email: restEmail,
        };
        try {
            const response = await axios.post('http://localhost:3001/api/admin/restoran/', restaurantData, {headers});
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
                <AdminRestaurant/>
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
                                        <span className="main-form__span">Наименование</span>
                                        <input value={restName} onChange={(e) => setRestName(e.target.value)} type="text" className="main-form__input"/>
                                    </div>
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">Адрес</span>
                                        <input value={restAddress} onChange={(e) => setRestAddress(e.target.value)} type="text" className="main-form__input"/>
                                    </div>
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">Почта</span>
                                        <input value={restEmail} onChange={(e) => setRestEmail(e.target.value)} type="text" className="main-form__input"/>
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