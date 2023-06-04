import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminPosition } from './AdminPosition';
import { AdminComponent } from '../AdminComponent/AdminComponent';

export function AdminCreatePosition (){
    const [ShowComponent, setShowComponent] = useState(false);
    const [catigories, setCatigories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [posName, setPosName] = useState('');
    const [posPrice, setPosPrice] = useState('');
    const [posIngrid, setPosIngrid] = useState('');
    const restNum = localStorage.getItem('restNumber');
    const access_token = localStorage.getItem("tokenLogin");
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        axios.get(`http://localhost:3001/api/admin/tags/${restNum}`)
        .then(res => {
            setCatigories(res.data.catigories);
            setSelectedCategory(res.data.catigories[0]['id_categoria'])
        })
        .catch(error => {
            console.log(error)
        });
    },[]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/admin/positions/create/',
                {
                    name: posName,
                    price: parseInt(posPrice),
                    categories: parseInt(selectedCategory),
                    ingridint: posIngrid,
                    token: access_token,
                    id_restoran: restNum
                }
            );
            setShowComponent(true);
        } catch (err) {
          console.error(err);
          MySwal.fire({
            title: <strong>Ошибка</strong>,
            html: <i>Не удалось создать позицию</i>,
            icon: 'error'
          })
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
                <AdminComponent>
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
                </AdminComponent>
                )
            } 
        </>
    );
};