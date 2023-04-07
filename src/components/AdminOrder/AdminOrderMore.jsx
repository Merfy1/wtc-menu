import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AdminOrderMoreComponent } from './AdminOrderMoreComponent';
import { AdminOrderComponent } from './AdminOrderComponent';

export function AdminOrderMore ({id_order}) {
    const [order, setOrder] = useState([]);
    const [ShowComponent, setShowComponent] = useState(false);
    
    const handleClick = () => {
        setShowComponent(true);
    };

    useEffect(() => {
        const access_token = localStorage.getItem('tokenLogin')
        axios.get(`http://localhost:3001/api/admin/order/${id_order}`, {
            headers: {
              'Authorization': access_token
            }
        })
        .then(response => {
            const order = response.data.order_positions;
            const fullOrder = order?.map((order) => 
                order.derails
            )
            setOrder(fullOrder);
            console.log(fullOrder)
        })
        .catch(error => {
            console.error(error);
        });   
    }, []);

    return (
        <>
            <thead>
                <tr>
                    <th>Номер Позиции</th>
                    <th>Количество товара</th>
                    <th>Цена товара</th>
                    <th>Номер столика</th>
                </tr>
            </thead>
            {order?.map((order) =>
                <AdminOrderMoreComponent order={order}/>
            )}
        </>
    );
};