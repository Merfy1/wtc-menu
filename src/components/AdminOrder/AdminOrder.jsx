import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';
import "../AdminCategory/admincategory.css"


export function AdminOrder (){
    return (
        <>
            <div className="main">
                <div className="main-container">
                    <div className="main-wrapper">
                        <div className="main-header">
                            <span className="main-header__title">
                                Заказы
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
                                        <th>Номер столика</th>
                                        <th>Статус заказа</th>
                                        <th>Позиции заказа</th>
                                        <th className="main-table__button">Действия</th>
                                    </tr>
                                </thead>
                                <td colspan="5">
                                    <div className='line'/>
                                </td>
                                <tbody>
                                    <tr>
                                        <td>13</td>
                                        <td>false</td>
                                        <td>Курочка Гриль</td>
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
                                        <td>11</td>
                                        <td>true</td>
                                        <td>Том ям</td>
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