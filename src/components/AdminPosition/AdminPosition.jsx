import { BsPencil,  BsTrash } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../AdminCategory/admincategory.css"
import { AdminPositionComponent } from '../AdminPositionComponent/AdminPositionComponent';


export function AdminPosition (){
    const [listPositions, setPosition] = useState([]);
    const [catigories, setCatigories] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/api/admin/positions/')
          .then(response => {
            setPosition(response.data.listPositions);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    useEffect(() => {
        axios.get('http://localhost:3001/api/admin/tags/')
          .then(response => {
            setCatigories(response.data.catigories);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
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
                        <div className="table-wrapper">
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
                                {listPositions?.map((position) =>
                                    <AdminPositionComponent catigories={catigories} key={position.id} name={position.name} price={position.price} categories={position.categories} ingridint={position.ingridint} />
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};