import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../AdminCategory/admincategory.css"

export function AdminRestaurant (){
    const [rest, setRest] = useState([]);
    useEffect(() => {
        const access_token = localStorage.getItem('tokenLogin')
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
    return (
        <>
            <div className="main">
                <div className="main-container">
                    <div className="main-wrapper">
                        <div className="main-header">
                            <span className="main-header__title">
                                Рестораны
                            </span>
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
                                    {/* {order?.map((orders) => (
                                    <AdminOrderComponent 
                                        key={orders.id} 
                                        id_order={orders.id_order} 
                                        status={orders.status_order.toString()}
                                        table={orders.table_id}
                                        time={orders.timeCreate}
                                        onDelete={handleDeleteOrder}
                                        onEdit={() => handleEdit(orders.id_order)}
                                        order={orders}
                                        onHidden={hiddenHeader}
                                        onHiddenSet={setHiddenHeader}  
                                    />
                                ))} */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};