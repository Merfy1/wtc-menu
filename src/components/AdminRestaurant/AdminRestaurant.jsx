import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AdminRestaurantComponent } from './AdminRestaurantComponent';
import { AdminCreateRestaurant } from './AdminCreateRestaurant';
import { AdminUpdateRestauran } from './AdminUpdateRestauran';

export function AdminRestaurant (){
    const [rest, setRest] = useState([]);
    const [restToUpdate, setRestToUpdate] = useState(null);
    const access_token = localStorage.getItem('tokenLogin')
    const [ShowComponent, setShowComponent] = useState(false);
    const [ShowUpdate, setShowUpdate] = useState(false)

    const handleClick = () => {
        setShowComponent(true);
    };
    const handleUpdateRest = (restId) => {
        setRestToUpdate(restId);
    };
    const headers = {
        Authorization: access_token,
    };
    useEffect(() => {
        axios.get(`http://localhost:3001/api/admin/restoran`, {headers})
        .then(response => {
            setRest(response.data);
        })
        .catch(error => {
            console.error(error);
        });   
    }, []);

    const handleDeleteRest = (id) => {
        axios.delete(`http://localhost:3001/api/admin/restoran/${id}`,{headers})
        .then(() => {
            setRest(rest.filter((restaurant) => restaurant.id !== id ));
        }).catch((err) => {
          console.log(err);
          alert("Не удалось удалить ресторан");
        });
    } 

    const handleRestUpdate  = async (newName, newAddress, newEmail, activeRestoran, activeLoginCastomer, activeBalance, activeLoyality) => {
        const restaurantData = {
            name: newName,
            address: newAddress,
            email: newEmail,
            activeRestoran: activeRestoran,
            activeLoginCastomer: activeLoginCastomer,
            activeBalance: activeBalance,
            activeLoyality: activeLoyality
        };
        try {
        const response = await axios.put(`http://localhost:3001/api/admin/restoran/${restToUpdate}`, restaurantData, {headers})
          .then((res) => {
            setRestToUpdate(null);
          })
        } catch (error) {
            console.error(error);
            alert('Не удалось изменить ресторан') // выводим ошибку в консоль
        }

        axios.get(`http://localhost:3001/api/admin/restoran`, {headers})
        .then(response => {
            setRest(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    };
    return (
        <>
            {ShowComponent && !ShowUpdate && (
                <AdminCreateRestaurant/>
            )
            }
            {
                restToUpdate && (
                    <AdminUpdateRestauran
                    setRestToUpdate={setRestToUpdate}
                    restId={restToUpdate}
                    onUpdateRest={handleRestUpdate}
                    setShowComponent1={setShowComponent}
                    setShowUpdate={setShowUpdate}
                    />
                ) 
            }
            {
                !restToUpdate && !ShowComponent && (
                <div className="main">
                    <div className="main-container">
                        <div className="main-wrapper">
                            <div className="main-header">
                                <span className="main-header__title">
                                    Рестораны
                                </span>
                                <button className="main-header__button" onClick={handleClick}>
                                    <img src="img/plus-mini.svg" alt=""/>
                                    Добавить
                                </button>
                            </div>
                            <span> Количество ресторанов: {rest.length}</span>
                            <div className="table-wrapper">
                                <table className='main-table'>
                                    <thead>
                                        <tr>
                                            <th>Имя ресторана</th>
                                            <th>Адрес</th>
                                            <th>Почта</th>
                                            <th className="main-table__button">Действия</th>
                                        </tr>
                                    </thead>
                                        {rest?.map((rests) => (
                                        <AdminRestaurantComponent
                                            key={rests.id} 
                                            rests={rests}
                                            onUpdateRest={handleUpdateRest} 
                                            onDelete={handleDeleteRest} 
                                        />
                                        ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </>
    );
};