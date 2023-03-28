import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';
import "../AdminCategory/admincategory.css"


export function AdminSlider (){
    return (
        <>
            <div className="main">
                <div className="main-container">
                    <div className="main-wrapper">
                        <div className="main-header">
                            <span className="main-header__title">
                                Слайдер
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
                                        <th>Путь слайда</th>
                                        <th>Показ</th>
                                        <th>Дата создания</th>
                                        <th className="main-table__button">Действия</th>
                                    </tr>
                                </thead>
                                <td colspan="5">
                                    <div className='line'/>
                                </td>
                                <tbody>
                                    <tr>
                                        <td>/uploads/c8594af2-9023-4524-8ea4-fa79ffc83f61.png</td>
                                        <td>false</td>
                                        <td>2023-03-21T17:29:30.000Z</td>
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
                                        <td>/uploads/c8594af2-9023-4524-8ea4-fa79ffc83f61.png</td>
                                        <td>true</td>
                                        <td>2023-03-21T17:29:30.000Z</td>
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