import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AdminUserComponent } from './AdminUserComponent';
import { AdminCreateUser } from './AdminCreateUser';
import { AdminComponent } from '../AdminComponent/AdminComponent';
import "../AdminCategory/admincategory.css"

export function AdminUser (){
    const [date, setUsers] = useState([]);
    const [ShowComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        setShowComponent(true);
    };

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
            {ShowComponent ? (
                <AdminCreateUser/>
            ) : (
                <AdminComponent>
                    <div className="main-header">
                        <span className="main-header__title">
                            Сотрудники
                        </span>
                        <button className="main-header__button" onClick={handleClick}>
                            <img src="img/plus-mini.svg" alt="" />
                            Добавить
                        </button>
                    </div>
                    <span> Количество сотрудников: {date.length}</span>
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
                </AdminComponent>
                )
            } 
        </>
    );
};