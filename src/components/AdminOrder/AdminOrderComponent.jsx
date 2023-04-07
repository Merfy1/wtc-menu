import React, { useState as useStatReact } from 'react';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { useState } from 'react';
import { AdminOrderMore } from './AdminOrderMore';

export function AdminOrderComponent ({onDelete, id_order, time, status, table, onEdit, order}) {
    const [ShowComponent, setShowComponent] = useState(false);
    
    const handleClick = () => {
        setShowComponent(true);
    };

    const handleDelete = () => {
        onDelete(id_order);
    }
    return (
        <>
            {ShowComponent ? (
                <AdminOrderMore id_order={id_order}/>
            ) : (
                <>  <thead>
                        <tr>
                            <th>Номер заказа</th>
                            <th>Дата создания</th>
                            <th>Статус заказа</th>
                            <th>Номер столика</th>
                            <th className="main-table__button">Действия</th>
                        </tr>
                    </thead>
                    <td colSpan="5">
                        <div className='line'/>
                    </td>
                    <tbody>
                        <tr>
                            <td>{id_order}</td>
                            <td>{time}</td>
                            <td>{status}</td>
                            <td>{table}</td>
                            <div className="main-table__button">
                                <button>
                                    <button onClick={() => handleClick(id_order)} >
                                        <CiCircleMore className='icon'></CiCircleMore>
                                    </button>
                                    <button onClick={onEdit}>
                                        <AiOutlineCloseCircle className='icon'></AiOutlineCloseCircle>
                                    </button>
                                    <button onClick={handleDelete}>
                                        <BsTrash className='icon'/>
                                    </button>
                                </button>
                            </div>
                        </tr>
                    </tbody>
                </>
            )}
        </>
    );
};