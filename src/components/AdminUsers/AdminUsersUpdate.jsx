import React, { useState, useEffect } from 'react';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminUsers } from './AdminUsers';

export function AdminUsersUpdate ({onUpdateUsers, setUsersToUpdate, setShowComponent1, setShowUpdate}) {
    const [ShowComponent, setShowComponent] = useState(false);
    const [newName, setNewName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newSurname, setNewSurname] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newDate, setNewDate] = useState("");

    useEffect(() => {
        setShowComponent1(false)
        setShowUpdate(false)
    }, []);

    const handleNameChange = (e) => {
        setNewName(e.target.value);
        setShowComponent1(false)
    };

    const handleLastNameChange = (e) => {
        setNewLastName(e.target.value);
        setShowComponent1(false)
    };

    const handleSurnameChange = (e) => {
        setNewSurname(e.target.value);
        setShowComponent1(false)
    };

    const handlePhoneChange = (e) => {
        setNewPhone(e.target.value);
        setShowComponent1(false)
    };

    const handleDateChange = (e) => {
        setNewDate(e.target.value);
        setShowComponent1(false)
    };

    const handleClick = () => {
        setShowComponent(true);
        setUsersToUpdate(null)
        setShowComponent1(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUsers(newName, newLastName, newSurname, newPhone, newDate);
        setShowComponent1(false)
        setShowUpdate(true)
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
                                            <span className="main-form__span">Имя</span>
                                            <input type="text" className="main-form__input" value={newName} onChange={handleNameChange}/>
                                        </div>
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Фамилия</span>
                                            <input  type="text" className="main-form__input" value={newLastName} onChange={handleLastNameChange}/>
                                        </div>
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Отчество</span>
                                            <input  type="text" className="main-form__input" value={newSurname} onChange={handleSurnameChange}/>
                                        </div>
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Номер телефона</span>
                                            <input  type="number" className="main-form__input" value={newPhone} onChange={handlePhoneChange}/>
                                        </div>
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Дата рождения</span>
                                            <input  type="text" className="main-form__input" value={newDate} onChange={handleDateChange}/>
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