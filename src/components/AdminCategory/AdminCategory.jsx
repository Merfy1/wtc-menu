import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsPencil,  BsTrash } from 'react-icons/bs';
import "./admincategory.css"
import { AdminCategoryComponent } from '../AdminCategoryComponent/AdminCategoryComponent';


export function AdminCategory (){
    const [catigories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/api/admin/tags/')
          .then(response => {
            setCategories(response.data.catigories);
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
                                Категория
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
                                        <th className="main-table__button">Действия</th>
                                    </tr>
                                </thead>
                                {catigories?.map((category) =>
                                    <AdminCategoryComponent key={category.id} name={category.name} />
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};