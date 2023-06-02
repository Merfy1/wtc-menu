import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AdminRestaurantComponent } from './AdminRestaurantComponent';
import "../AdminCategory/admincategory.css"
import { AdminCreateRestaurant } from './AdminCreateRestaurant';

export function AdminRestaurant (){
    const [rest, setRest] = useState([]);
    const access_token = localStorage.getItem('tokenLogin')
    const [ShowComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        setShowComponent(true);
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/api/admin/restoran`, {
            headers: {
              'Authorization': access_token
            }
        })
        .then(response => {
            setRest(response.data);
        })
        .catch(error => {
            console.error(error);
        });   
    }, []);
    const handleDeleteRest = (id) => {
        axios.delete(`http://localhost:3001/api/admin/restoran/${id}`,{
            headers: {
                'Authorization': access_token
              }
        }).then(() => {
            setRest(rest.filter((restaurant) => restaurant.id !== id ));
        }).catch((err) => {
          console.log(err);
          alert("Не удалось удалить ресторан");
        });
    } 
    return (
        <>
            {ShowComponent ? (
                <AdminCreateRestaurant/>
            ) : (
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