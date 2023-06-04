import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "../AdminCategory/admincategory.css"
import { AdminPositionComponent } from './AdminPositionComponent';
import { AdminCreatePosition } from './AdminCreatePosition';
import { AdminComponent } from '../AdminComponent/AdminComponent';


export function AdminPosition (){
    const [listPositions, setPosition] = useState([]);
    const [catigories, setCatigories] = useState([]);
    const [ShowComponent, setShowComponent] = useState(false);
    const restNum = localStorage.getItem('restNumber');
    const access_token = localStorage.getItem("tokenLogin");
    const MySwal = withReactContent(Swal)

    const handleClick = () => {
        setShowComponent(true);
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/api/admin/positions/${restNum}`)
        .then(response => {
          setPosition(response.data.listPositions);
        })
        .catch(error => {
          console.error(error);
        });
    },[]);

    useEffect(() => {
      axios.get(`http://localhost:3001/api/admin/tags/${restNum}`)
      .then(response => {
        setCatigories(response.data.catigories);
      })
      .catch(error => {
        console.error(error);
      });
    },[]);

    const handleDeleteUser = (id) => {
      axios.delete(`http://localhost:3001/api/admin/positions/${id}`,{
        data: { 
          token: access_token,
        },
      })
      .then(() => {
        setPosition(listPositions.filter((position) => position.id_position !== id ));
      })
      .catch((err) => {
        console.log(err);
        MySwal.fire({
          title: <strong>Ошибка</strong>,
          html: <i>Не удалось удалить позицию</i>,
          icon: 'error'
        })
      });
    } 
    return (
        <>
            {ShowComponent ? (
                <AdminCreatePosition/>
            ) : (
                <AdminComponent>
                  <div className="main-header">
                      <span className="main-header__title">
                          Позиции
                      </span>
                      <button className="main-header__button" onClick={handleClick}>
                          <img src="img/plus-mini.svg" alt=""/>
                          Добавить
                      </button>
                  </div>
                  <span> Количество позиций: {listPositions.length}</span>
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
                              <AdminPositionComponent catigories={catigories} key={position.id_position} name={position.name} onDelete={handleDeleteUser} price={position.price} categories={position.categories} ingridint={position.ingridint} position={position} id={position.id_position}/>
                          )}
                      </table>
                  </div>
                </AdminComponent>
            )
          }
        </>
    );
};