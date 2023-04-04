import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminCategory } from './AdminCategory';

export function AdminUpdateCategory ( {categoryId, onUpdateCategory}){
    const [ShowComponent, setShowComponent] = useState(false);
    const [newName, setNewName] = useState("");
    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateCategory(newName);
    };
    const handleClick = () => {
        setShowComponent(true);
    };
    return (
        <>
            {ShowComponent ? (
                <AdminCategory/>
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