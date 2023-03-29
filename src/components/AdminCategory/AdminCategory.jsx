import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';
import "./admincategory.css"


export function AdminCategory (){
    
    return (
        <>
            <div className="main">
                <div className="main-container">
                    <div className="main-wrapper">
                        <div className="main-header">
                            <span className="main-header__title">
                                Категория
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
                                        <th className="main-table__button">Действия</th>
                                    </tr>
                                </thead>
                                <td colspan="2">
                                        <div className='line'/>
                                    </td>
                                <tbody>
                                    <tr>
                                        <td>Напитки</td>
                                        <div className="main-table__button">
                                            <button>
                                                <BsPencil className='icon'></BsPencil>
                                                <BsTrash className='icon'/>
                                            </button>
                                        </div>
                                    </tr>
                                    <td colspan="2">
                                        <div className='line'/>
                                    </td>
                                    <tr>
                                        <td>Горячее</td>
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