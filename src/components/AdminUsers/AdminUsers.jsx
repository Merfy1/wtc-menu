import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../AdminCategory/admincategory.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AdminComponent } from '../AdminComponent/AdminComponent';
import "../AdminCategory/admincategory.css"
import { AdminUsersCreate } from './AdminUsersCreate';
import { AdminUsersUpdate } from './AdminUsersUpdate';
import { AdminUsersComponent } from './AdminUsersComponent';

export function AdminUsers () {
    const [users, setUsers] = useState([]);
    const [usersToUpdate, setUsersToUpdate] = useState(null);
    const [ShowComponent, setShowComponent] = useState(false);
    const [ShowUpdate, setShowUpdate] = useState(false)
    const access_token = localStorage.getItem("tokenLogin");
    const MySwal = withReactContent(Swal)
    const headers = {
        Authorization: access_token,
    };

    const handleShowComponent = () => {
        setShowComponent(true);
    };

    const handleUpdateUser = (usersId) => {
        setUsersToUpdate(usersId);
    };

    const updateData = () => {
        axios.get(`http://localhost:3001/api/admin/castomer/`, {headers})
        .then(res => {
            setUsers(res.data.listCastomer);
        })
        .catch(err => {
            console.error(err);
        });
    }

    useEffect(() => {
        updateData();
    },[]);

    const handleDeleteUsers = (id) => {
        axios.delete(`http://localhost:3001/api/admin/castomer/${id}`, {headers})
        .then(() => {
            setUsers(users.filter((user) => user.id_user !== id));
        }).catch((err) => {
            console.log(err);
            MySwal.fire({
                title: <strong>Ошибка</strong>,
                html: <i>Не удалось удалить пользователя</i>,
                icon: 'error'
            })
        });
    };

    const handleUpdateUsers  = async (newName, newLastname, newSurname, newPhone, newDate) => {
        const useresData = {
            name: newName,
            lastname: newLastname,
            surname: newSurname,
            phone: newPhone,
            dateBirsdate: newDate,
        };
        try {
        const response = await axios.put(`http://localhost:3001/api/admin/castomer/${usersToUpdate}`, useresData, {headers})
            .then((res) => {
                setUsersToUpdate(null);
            })
        } catch (err) {
            console.error(err);
            MySwal.fire({
                title: <strong>Ошибка</strong>,
                html: <i>Не удалось изменить пользователя</i>,
                icon: 'error'
            })
        }
        updateData();
    };

    return (
        <>
            {ShowComponent && !ShowUpdate && (
                <AdminUsersCreate/>
            )
            }
            {
                usersToUpdate && (
                    <AdminUsersUpdate
                    setUsersToUpdate={setUsersToUpdate}
                    onUpdateUsers={handleUpdateUsers}
                    setShowComponent1={setShowComponent}
                    setShowUpdate={setShowUpdate}
                    />
                ) 
            }
            {
            !usersToUpdate && !ShowComponent && (
                <AdminComponent>
                        <div className="main-header">
                            <span className="main-header__title">
                                Пользователи
                            </span>
                            <button className="main-header__button" onClick={handleShowComponent}>
                                <img src="img/plus-mini.svg" alt="" />
                                Добавить
                            </button>
                        </div>
                        <span>Количество пользователей: {users.length}</span>
                        <div className="table-wrapper">
                            <table className='main-table'>
                                <thead>
                                    <tr>
                                        <th>Имя</th>
                                        <th>Фамилия</th>
                                        <th>Отчество</th>
                                        <th>Телефон</th>
                                        <th>Дата рождения</th>
                                        <th className="main-table__button">Действия</th>
                                    </tr>
                                </thead>
                                {!usersToUpdate &&  (
                                    <AdminUsersComponent
                                        users={users}
                                        onUpdate={handleUpdateUser}
                                        onDelete={handleDeleteUsers}
                                    />
                                )}
                            </table>
                        </div>
                    </AdminComponent>
                )
            }                    
        </>
    );
};