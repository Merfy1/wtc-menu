import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AdminOrderMoreComponent } from './AdminOrderMoreComponent';
import { AdminOrderComponent } from './AdminOrderComponent';
import { BiArrowBack, BiCheck } from 'react-icons/bi';


export function AdminOrderMore ({id_order, onHidden, onHiddenSet, setShowComponent1}) {
    const [order, setOrder] = useState([]);
    const [ShowComponent, setShowComponent] = useState(false);
    
    const handleClick = () => {
        setShowComponent(true);
        onHiddenSet(true)
        setShowComponent1(false)
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
        })
        .catch(error => {
            console.error(error);
        });   
    }, []);

    return (
        <>
            <thead>
                <tr>
                    <th>Название Позиции</th>
                    <th>Цена товара</th>
                    <th>Категория товара</th>
                    <th>Ингридиенты</th>
                    <button className="main-header__back" onClick={() => handleClick(id_order)}>
                        <BiArrowBack/> Назад
                    </button>
                </tr>
            </thead>
            {order?.map((order) =>
                <AdminOrderMoreComponent order={order}/>
            )}
        </>
    );
};