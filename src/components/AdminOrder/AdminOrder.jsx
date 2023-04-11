import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../AdminCategory/admincategory.css"
import { AdminOrderComponent } from './AdminOrderComponent';


export function AdminOrder (){
    const [order, setOrder] = useState([]);
    const [hiddenHeader, setHiddenHeader] = useState(true)
    
    useEffect(() => {
        const access_token = localStorage.getItem('tokenLogin')
        axios.get('http://45.12.237.227:3001/api/admin/order/', {
            headers: {
              'Authorization': access_token
            }
        })
        .then(response => {
            setOrder(response.data.result_serch);
        })
        .catch(error => {
            console.error(error);
        });   
    }, []);

    const handleDeleteOrder = (id) => {
        axios.delete(`http://45.12.237.227:3001/api/admin/order/${id}`,
        {
            data: { token: localStorage.getItem("tokenLogin") },
        }).then(() => {
            setOrder(order.filter((orders) => orders.id_order !== id));
        }).catch((err) => {
            console.log(err);
            alert("Не удалось удалить заказ");
        });
    } 
    
    const handleEdit = (orderId) => {
        const access_token = localStorage.getItem('tokenLogin')
        axios.put(`http://45.12.237.227:3001/api/admin/order/${orderId}`,
            {
                token: access_token,
            }
        )
        .then((response) => {
            axios.get('http://45.12.237.227:3001/api/admin/order/', {
                headers: {
                  'Authorization': access_token
                }
            })
            .then(response => {
                setOrder(response.data.result_serch);
            })
            .catch(error => {
                console.error(error);
            });
            console.log(response);
        })
        .catch((error) => {
            alert(error)
            console.log(error);
        });
        
    };

    return (
        <>
            <div className="main">
                <div className="main-container">
                    <div className="main-wrapper">
                        <div className="main-header">
                            <span className="main-header__title">
                                Заказы
                            </span>
                        </div>
                        <span> Количество заказов: {order.length}</span>
                        <div className="table-wrapper">
                            <table className='main-table'>
                                {hiddenHeader && (
                                    <>
                                        <thead>
                                            <tr>
                                                <th>Номер заказа</th>
                                                <th>Дата создания</th>
                                                <th>Статус заказа</th>
                                                <th>Номер столика</th>
                                                <th className="main-table__button">Действия</th>
                                            </tr>
                                        </thead>
                                    </>
                                )}
                                {order?.map((orders) => (
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
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};