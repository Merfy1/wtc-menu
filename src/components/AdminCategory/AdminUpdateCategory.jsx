import React, { useState, useEffect } from 'react';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminCategory } from './AdminCategory';
import { AdminComponent } from '../AdminComponent/AdminComponent';

export function AdminUpdateCategory ( {onUpdateCategory, setCategoryToUpdate, setShowComponent1, setShowUpdate}){
    const [ShowComponent, setShowComponent] = useState(false);
    const [newName, setNewName] = useState("");

    useEffect(() => {
        setShowComponent1(false)
        setShowUpdate(false)
    }, []);

    const handleNameChange = (e) => {
        setNewName(e.target.value);
        setShowComponent1(false)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateCategory(newName);
        setShowComponent1(false)
        setShowUpdate(true)
    };
    const handleClick = () => {
        setShowComponent(true);
        setCategoryToUpdate(null)
        setShowComponent1(false)
    };
    return (
        <>
            {ShowComponent ? (
                <AdminCategory/>
            ) : (
                    <AdminComponent>
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
                    </AdminComponent>
                )
            } 
        </>
    );
};