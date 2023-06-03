import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { BiArrowBack, BiCheck } from 'react-icons/bi';
import { AdminCategory } from './AdminCategory';
import { AdminComponent } from '../AdminComponent/AdminComponent';

export function AdminCreateCategory (){
    const [ShowComponent, setShowComponent] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const restNum = localStorage.getItem('restNumber');
    const access_token = localStorage.getItem('tokenLogin');
    const MySwal = withReactContent(Swal)

    const handleCreateCategory = async () => {
        try {
            await axios.post(`http://localhost:3001/api/admin/tags/${restNum}`,
                {
                    name: categoryName,
                    token: access_token,
                }
            );
            setShowComponent(true);
        } catch (err) {
            console.error(err);
            MySwal.fire({
                title: <strong>Ошибка</strong>,
                html: <i>Не удалось создать категорию</i>,
                icon: 'error'
            })
        }
    };

    const handleShowComponent = () => {
        setShowComponent(true);
    };

    return (
        <>
            {ShowComponent ? (
                <AdminCategory/>
            ) : (
                    <AdminComponent>
                        <button className="main-header__back" onClick={handleShowComponent}>
                            <BiArrowBack/>Назад
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
                    </AdminComponent>
                )
            } 
        </>
    );
};