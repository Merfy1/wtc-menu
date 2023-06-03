import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "../AdminCategory/admincategory.css"
import { AdminOrderComponent } from './AdminOrderComponent';
import { AdminComponent } from '../AdminComponent/AdminComponent';

export function AdminOrder (){
    const [order, setOrder] = useState([]);
    const [hiddenHeader, setHiddenHeader] = useState(true)
    const access_token = localStorage.getItem('tokenLogin')
    const restNum = localStorage.getItem('restNumber')
    const MySwal = withReactContent(Swal)
    const headers = {
        Authorization: access_token,
    };

    const updateData = () => {
        axios.get(`http://localhost:3001/api/admin/order/${restNum}`, {headers})
        .then(response => {
            setOrder(response.data.result_serch);
        })
        .catch(err => {
            console.error(err);
        }); 
    }

    useEffect(() => {
        updateData(); 
    }, []);

    const handleDeleteOrder = (id) => {
        axios.delete(`http://localhost:3001/api/admin/order/${id}`,{ token: access_token })
        .then(() => {
            setOrder(order.filter((orders) => orders.id_order !== id));
        }).catch((err) => {
            console.log(err);
            MySwal.fire({
                title: <strong>Ошибка</strong>,
                html: <i>Не удалось удалить заказ</i>,
                icon: 'error'
            })
        });
    } 
    
    const handleEdit = (orderId) => {
        axios.put(`http://localhost:3001/api/admin/order/${orderId}`, { token: access_token })
        .then(() => {
            updateData();
        })
        .catch((error) => {
            MySwal.fire({
                title: <strong>Ошибка</strong>,
                html: <i>Не удалось изменить заказ</i>,
                icon: 'error'
            })
            console.log(error);
        });
    };

    return (
        <>
            <AdminComponent>
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
            </AdminComponent>
        </>
    );
};