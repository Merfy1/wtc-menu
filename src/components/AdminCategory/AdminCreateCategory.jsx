import React, { useState } from 'react';
import axios from 'axios';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminCategory } from './AdminCategory';

export function AdminCreateCategory (){
    const [ShowComponent, setShowComponent] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const restNum = localStorage.getItem('restNumber');
    const token = localStorage.getItem('tokenLogin'); // получаем токен из localStorage

    const handleCreateCategory = async () => {
        try {
          const response = await axios.post(`http://localhost:3001/api/admin/tags/${restNum}`,
            {
              name: categoryName,
              token: token,
            }
          );
          console.log(response.data); // выводим ответ сервера в консоль
          setShowComponent(true);

        } catch (error) {
          console.error(error); // выводим ошибку в консоль
          alert("Не удается создать категорию");
        }

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
                                        <span className="main-form__span">Наименование</span>
                                        <input value={categoryName} onChange={(e) => setCategoryName(e.target.value)} type="text" className="main-form__input"/>
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