import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';
import "../AdminCategory/admincategory.css"


export function AdminPosition (){
    return (
        <>
            <div className="main">
                <div className="main-container">
                    <div className="main-wrapper">
                        <div className="main-header">
                            <span className="main-header__title">
                                Позиции
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
                                        <th>Наименование</th>
                                        <th>Цена</th>
                                        <th>Категория</th>
                                        <th>Ингридиенты</th>
                                        <th className="main-table__button">Действия</th>
                                    </tr>
                                </thead>
                                <td colspan="5">
                                    <div className='line'/>
                                </td>
                                <tbody>
                                    <tr>
                                        <td>Курочка Гриль</td>
                                        <td>1200</td>
                                        <td>Горячее</td>
                                        <td>Курица</td>
                                        <div className="main-table__button">
                                            <button>
                                                <BsPencil className='icon'></BsPencil>
                                                <BsTrash className='icon'/>
                                            </button>
                                        </div>
                                    </tr>
                                    <td colspan="5">
                                        <div className='line'/>
                                    </td>
                                    <tr>
                                        <td>Том ям</td>
                                        <td>999</td>
                                        <td>Горячее</td>
                                        <td>Том и ям</td>
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