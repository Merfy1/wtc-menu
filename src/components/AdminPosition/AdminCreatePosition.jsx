import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminPosition } from './AdminPosition';

export function AdminCreatePosition (){
    const [ShowComponent, setShowComponent] = useState(false);
    const [catigories, setCatigories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [posName, setPosName] = useState('');
    const [posPrice, setPosPrice] = useState('');
    const [posIngrid, setPosIngrid] = useState('');

    useEffect(() => {
        axios.get('http://45.12.237.227:3001/api/admin/tags/')
        .then(res => {
            setCatigories(res.data.catigories);
            console.log(res.data.catigories[0])
            setSelectedCategory(res.data.catigories[0]['id_categoria'])
        })
          .catch(error => console.log(error));
      }, []);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('tokenLogin'); // получаем токен из localStorage
        try {
            const response = await axios.post('http://45.12.237.227:3001/api/admin/positions/create/',
                {
                    name: posName,
                    price: parseInt(posPrice),
                    categories: parseInt(selectedCategory),
                    ingridint: posIngrid,
                    active: true,
                    token: token,
                }
            );
            setShowComponent(true);

        } catch (error) {
          console.error(error); // выводим ошибку в консоль
        }

    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    const handleClick = () => {
        setShowComponent(true);
    };

    return (
        <>
            {ShowComponent ? (
                <AdminPosition/>
            ) : (
                <div className="main">
                    <div className="main-container">
                        <div className="main-wrapper">
                            <button className="main-header__back" onClick={handleClick}>
                                <BiArrowBack/> Назад
                            </button>
                            <form onSubmit={handleSubmit}>
                                <div className="main-header">
                                    <span className="main-header__title">
                                        Создание
                                    </span>
                                    <button className="main-header__button" type="submit">
                                        <span><BiCheck/></span>
                                        Сохранить
                                    </button>
                                </div>
                                <div className="table-wrapper">
                                    <form className='main-form'> 
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Название</span>
                                            <input value={posName} onChange={(event) => setPosName(event.target.value)} type="text" className="main-form__input"/>
                                        </div>
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Цена</span>
                                            <input value={posPrice} onChange={(event) => setPosPrice(event.target.value)} type="number" className="main-form__input"/>
                                        </div> 
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Категория</span>
                                            <select value={selectedCategory} onChange={handleCategoryChange} className="main-form__input">
                                                {catigories.map(category => (
                                                    <option key={category.id} value={category.id_categoria}>{category.name}</option>
                                                ))}
                                            </select>
                                            
                                        </div> 
                                        <div className="main-form__input-create">
                                            <span className="main-form__span">Ингридиенты</span>
                                            <input value={posIngrid} onChange={(e) => setPosIngrid(e.target.value)} type="text" className="main-form__input"/>
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