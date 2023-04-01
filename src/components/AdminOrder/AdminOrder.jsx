import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../AdminCategory/admincategory.css"
import { AdminOrderComponent } from '../AdminOrderComponent/AdminOrderComponent';


export function AdminOrder (){
    const [order, setOrder] = useState([]);
    const access_token = localStorage.getItem('tokenLogin')
    useEffect(() => {
        axios.get('http://localhost:3001/api/admin/order/', {
            headers: {
              'Authorization': access_token
            }
        })
        .then(response => {
            setOrder(response.data.result_serch);
            console.log(response.data.result_serch)
        })
        .catch(error => {
            console.error(error);
        });
          
      }, []);
    const handleDeleteUser = (id) => {
      axios.delete(`http://localhost:3001/api/admin/order/${id}`,{
          data: { token: localStorage.getItem("tokenLogin") },
      }).then(() => {
        setOrder(order.filter((orders) => orders.id_order !== id));
      }).catch((err) => {
        console.log(err);
        alert("Не удалось удалить заказ");
      });
    } 
    return (
        <>
            <div className="main">
                <div className="main-container">
                    <div className="main-wrapper">
                        <div className="main-header">
                            <span className="main-header__title">
                                Заказы
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
                                        <th>Номер заказа</th>
                                        <th>Дата создания</th>
                                        <th>Статус заказа</th>
                                        <th>Номер столика</th>
                                        <th className="main-table__button">Действия</th>
                                    </tr>
                                </thead>
                                {order?.map((orders) => (
                                    <AdminOrderComponent 
                                        key={orders.id} 
                                        id_order={orders.id_order} 
                                        status={orders.status_order.toString()}
                                        table={orders.table_id}
                                        time={orders.timeCreate}
                                        onDelete={handleDeleteUser}
                                        order={orders}
                                        
                                    />
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};