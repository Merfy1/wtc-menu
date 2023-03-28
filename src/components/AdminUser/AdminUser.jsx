import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';
import "../AdminCategory/admincategory.css"


export function AdminUser (){
    return (
        <>
            <div className="main">
                <div className="main-container">
                    <div className="main-wrapper">
                        <div className="main-header">
                            <span className="main-header__title">
                                Пользователи
                            </span>
                            <button className="main-header__button">
                                <img src="img/plus-mini.svg" alt=""/>
                                Добавить
                            </button>
                        </div>
                        <div class="table-wrapper">
                            <table className='main-table'>
                                <thead>
                                    <tr>
                                        <th>Имя</th>
                                        <th>Фамилия</th>
                                        <th>Отчество</th>
                                        <th>Логин</th>
                                        <th>Пароль</th>
                                        <th className="main-table__button">Действия</th>
                                    </tr>
                                </thead>
                                <td colspan="6">
                                    <div className='line'/>
                                </td>
                                <tbody>
                                    <tr>
                                        <td>Александр</td>
                                        <td>Стороженко</td>
                                        <td>Евгеньевич</td>
                                        <td>admin</td>
                                        <td>admin</td>
                                        <div className="main-table__button">
                                            <button>
                                                <BsPencil className='icon'></BsPencil>
                                                <BsTrash className='icon'/>
                                            </button>
                                        </div>
                                    </tr>
                                    <td colspan="6">
                                        <div className='line'/>
                                    </td>
                                    <tr>
                                        <td>Александр</td>
                                        <td>Стороженко</td>
                                        <td>Евгеньевич</td>
                                        <td>admin</td>
                                        <td>admin</td>
                                        <div className="main-table__button">
                                            <button>
                                                <BsPencil className='icon'></BsPencil>
                                                <BsTrash className='icon'/>
                                            </button>
                                        </div>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};