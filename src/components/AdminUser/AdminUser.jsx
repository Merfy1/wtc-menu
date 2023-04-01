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

      const handleDeleteUser = (id) => {
        axios.delete(`http://localhost:3001/api/admin/user/deleteUser/${id}`,{
            data: { tocken: localStorage.getItem("tokenLogin") },
        }).then(() => {
            setUsers(date.filter((user) => user.id_employeer !== id));
        }).catch((err) => {
          console.log(err);
          alert("Не удалось удалить пользователя");
        });
      } 
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
                                    <AdminUserComponent key={user.id_employeer} user={user} onDelete={handleDeleteUser}/>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};