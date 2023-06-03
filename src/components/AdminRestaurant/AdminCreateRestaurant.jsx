import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminRestaurant } from './AdminRestaurant';

export function AdminCreateRestaurant () {
    const [ShowComponent, setShowComponent] = useState(false);
    const [restName, setRestName] = useState('');
    const [restAddress, setRestAddress] = useState('');
    const [restEmail, setRestEmail] = useState('');
    // const [isRestCastomerLogin, setIsCastomerLogin] = useState(true);
    // const [isRestActive, setIsRestActive] = useState(true);
    // const [isRestActiveBalance, setIsRestActiveBalance] = useState(true);
    // const [isRestAactiveLoyality, setIsRestAactiveLoyality] = useState(true);

    const access_token = localStorage.getItem('tokenLogin'); // получаем токен из localStorage

    const handleCreateRest = async () => {
        const headers = {
            Authorization: access_token,
        };
        const restaurantData = {
            name: restName,
            address: restAddress,
            email: restEmail,
            // activeRestoran: isRestActive,
            // activeLoginCastomer: isRestCastomerLogin,
            // activeBalance: isRestActiveBalance,
            // activeLoyality: isRestAactiveLoyality
        };
        try {
          const response = await axios.post('http://localhost:3001/api/admin/restoran/', restaurantData, {headers});
          console.log(response.data); // выводим ответ сервера в консоль
          setShowComponent(true);
        } catch (error) {
          console.error(error); // выводим ошибку в консоль
          alert('Не удается создать ресторан')
        }

    };
    const handleClick = () => {
        setShowComponent(true);
    };
    // const handleIsRestActiveChange = (event) => {
    //     setIsRestActive(event.target.value === 'true');
    // };
    // const handleIsRestCastomerLogin = (event) => {
    //     setIsCastomerLogin(event.target.value === 'true');
    // };
    // const handleIsRestActiveBalance = (event) => {
    //     setIsRestActiveBalance(event.target.value === 'true');
    // };
    // const handleIsRestActiveLoyality = (event) => {
    //     setIsRestAactiveLoyality(event.target.value === 'true');
    // };
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
                                    {/* <div className="main-form__input-create">
                                        <span className="main-form__span"> <br/>
                                            Активен ли ресторан? <br/>
                                            <input
                                            type="radio"
                                            name="isApproved"
                                            value="true"
                                            checked={isRestActive === true}
                                            onChange={handleIsRestActiveChange}
                                            /> Да
                                            <input
                                            type="radio"
                                            name="isApproved"
                                            value="false"
                                            checked={isRestActive === false}
                                            onChange={handleIsRestActiveChange}
                                            /> Нет
                                        </span>
                                    </div>
                                    <div className="main-form__input-create">
                                        <span className="main-form__span"> <br/>
                                            Нужна ли регистрация ? <br/>
                                            <input
                                            type="radio"
                                            name="isApproved1"
                                            value="true"
                                            checked={isRestCastomerLogin === true}
                                            onChange={handleIsRestCastomerLogin}
                                            /> Да
                                            <input
                                            type="radio"
                                            name="isApproved1"
                                            value="false"
                                            checked={isRestCastomerLogin === false}
                                            onChange={handleIsRestCastomerLogin}
                                            /> Нет
                                        </span>
                                    </div>
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">
                                            Активен ли баланс ресторана?  <br/>
                                            <input
                                            type="radio"
                                            name="isApproved2"
                                            value="true"
                                            checked={isRestActiveBalance === true}
                                            onChange={handleIsRestActiveBalance}
                                            /> Да
                                            <input
                                            type="radio"
                                            name="isApproved2"
                                            value="false"
                                            checked={isRestActiveBalance === false}
                                            onChange={handleIsRestActiveBalance}
                                            /> Нет
                                        </span>
                                    </div>
                                    <div className="main-form__input-create">
                                        <span className="main-form__span">
                                            Активна ли Система лояльности?  <br/>
                                            <input
                                            type="radio"
                                            name="isApproved3"
                                            value="true"
                                            checked={isRestAactiveLoyality === true}
                                            onChange={handleIsRestActiveLoyality}
                                            /> Да
                                            <input
                                            type="radio"
                                            name="isApproved3"
                                            value="false"
                                            checked={isRestAactiveLoyality === false}
                                            onChange={handleIsRestActiveLoyality}
                                            /> Нет
                                        </span>
                                    </div> */}
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