import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminOrder } from './AdminOrder';

export function AdminCreateOrder (){
    const [ShowComponent, setShowComponent] = useState(false);
    const handleClick = () => {
        setShowComponent(true);
    };
    return (
        <>
            {ShowComponent ? (
                <AdminOrder/>
            ) : (
                <div className="main">
                    <div className="main-container">
                        <div className="main-wrapper">
                            <button className="main-header__back" onClick={handleClick}>
                                <BiArrowBack/> Назад
                            </button>
                            <form>
                                <div className="main-header">
                                    <span className="main-header__title">
                                        Создание
                                    </span>
                                    <button className="main-header__button" type='submit'>
                                        <span><BiCheck/></span>
                                        Сохранить
                                    </button>
                                </div>
                                <div className="table-wrapper">
                                    <form className='main-form'> 
                                        <div className="main-form__input-create">
                                            <span  htmlFor="tableId" className="main-form__span">Номер столика</span>
                                            <input name="tableId" id="tableId" className="main-form__input"/>
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