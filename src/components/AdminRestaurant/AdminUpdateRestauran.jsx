import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminRestaurant } from './AdminRestaurant';

export function AdminUpdateRestauran ({restId, onUpdateRest, setRestToUpdate, setShowComponent1, setShowUpdate}) {
    const [ShowComponent, setShowComponent] = useState(false);
    const [newName, setNewName] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [isRestCastomerLogin, setIsCastomerLogin] = useState(true);
    const [isRestActive, setIsRestActive] = useState(true);
    const [isRestActiveBalance, setIsRestActiveBalance] = useState(true);
    const [isRestAactiveLoyality, setIsRestAactiveLoyality] = useState(true);

    useEffect(() => {
        setShowComponent1(false)
        setShowUpdate(false)
    }, []);

    const handleNameChange = (e) => {
        setNewName(e.target.value);
        setShowComponent1(false)
    };
    const handleAddressChange = (e) => {
        setNewAddress(e.target.value);
        setShowComponent1(false)
    };
    const handleEmailChange = (e) => {
        setNewEmail(e.target.value);
        setShowComponent1(false)
    };
    const handleIsRestActiveChange = (e) => {
        setIsRestActive(e.target.value === 'true');
    };
    const handleIsRestCastomerLogin = (e) => {
        setIsCastomerLogin(e.target.value === 'true');
    };
    const handleIsRestActiveBalance = (e) => {
        setIsRestActiveBalance(e.target.value === 'true');
    };
    const handleIsRestActiveLoyality = (e) => {
        setIsRestAactiveLoyality(e.target.value === 'true');
    };

    const handleClick = () => {
        setShowComponent(true);
        setRestToUpdate(null)
        setShowComponent1(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateRest(newName, newAddress, newEmail, isRestCastomerLogin, isRestActive, isRestActiveBalance, isRestAactiveLoyality);
        setShowComponent1(false)
        setShowUpdate(true)
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
                            <form onSubmit={handleSubmit}>
                                <div className="main-header">
                                    <span className="main-header__title" >
                                        Изменение
                                    </span>
                                    <button className="main-header__button" type="submit" >
                                        <span><BiCheck/></span>
                                        Сохранить
                                    </button>
                                </div>
                                <div className="table-wrapper">
                                    <form className='main-form'> 
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Наименование</span>
                                            <input type="text" className="main-form__input" value={newName} onChange={handleNameChange}/>
                                        </div>
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Адрес</span>
                                            <input  type="text" className="main-form__input" value={newAddress} onChange={handleAddressChange}/>
                                        </div>
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Почта</span>
                                            <input  type="text" className="main-form__input" value={newEmail} onChange={handleEmailChange}/>
                                        </div>
                                        <div className="main-form__input-create">
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
                                        </div>
                                    </form>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
                )
            } 
        </>
    );
};