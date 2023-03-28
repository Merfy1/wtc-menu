import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';
import "./adminmain.css"


export function AdminMain (){
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
                        <table className="main-table">
                            <tr>
                                <th>Наименование</th>
                                <th>Наименование</th>
                            </tr>
                            <div className='line'/>
                            <tr className='main-table__content'>
                                <td>Alfreds Futterkiste</td>
                                <div className="main-table__button">
                                    <BsPencil></BsPencil>
                                    <BsTrash/>
                                </div>
                            </tr>
                            <div className='line'/>
                            <tr>
                                <td>Centro comercial Moctezuma<div className="main-table__button">
                                    <BsPencil></BsPencil>
                                    <BsTrash/>
                                </div>
                                </td>
                                
                            </tr>

                        </table>

                    </div>
                </div>
            </div>  
        </>
    );
};