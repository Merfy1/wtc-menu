import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AdminUserComponent } from '../AdminUserComponent/AdminUserComponent';
import "../AdminCategory/admincategory.css"


export function AdminUser (){
    const [date, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/api/admin/user/view/')
          .then(response => {
            setUsers(response.data.date);
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
                                Пользователи
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
                                        <th>Имя</th>
                                        <th>Фамилия</th>
                                        <th>Отчество</th>
                                        <th>Логин</th>
                                        <th className="main-table__button">Действия</th>
                                    </tr>
                                </thead>
                                {date?.map((user) =>
                                    <AdminUserComponent key={user.id} name={user.name} surname={user.surname} lastname={user.lastname} nickname={user.nickname}/>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};