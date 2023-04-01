import { BsPencil,  BsTrash } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../AdminCategory/admincategory.css"
import { AdminPositionComponent } from './AdminPositionComponent';
import { AdminCreatePosition } from './AdminCreatePosition';


export function AdminPosition (){
    const [listPositions, setPosition] = useState([]);
    const [catigories, setCatigories] = useState([]);
    const [ShowComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        setShowComponent(true);
    };

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
    const handleDeleteUser = (id) => {
      axios.delete(`http://localhost:3001/api/admin/positions/${id}`,{
          data: { token: localStorage.getItem("tokenLogin") },
      }).then(() => {
        setPosition(listPositions.filter((position) => position.id_position !== id ));
      }).catch((err) => {
        console.log(err);
        alert("Не удалось удалить пользователя");
      });
    } 
    return (
        <>
            {ShowComponent ? (
                <AdminCreatePosition/>
            ) : (
            <div className="main">
                <div className="main-container">
                    <div className="main-wrapper">
                        <div className="main-header">
                            <span className="main-header__title">
                                Позиции
                            </span>
                            <button className="main-header__button" onClick={handleClick}>
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
                                    <AdminPositionComponent catigories={catigories} key={position.id_position} name={position.name} onDelete={handleDeleteUser} price={position.price} categories={position.categories} ingridint={position.ingridint} position={position}/>
                                )}
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