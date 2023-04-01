import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';

export function AdminOrderComponent ({onDelete, order, id_order, time, status, table}) {
    const handleDelete = () => {
        onDelete(order.id_order);
    }
    return (
        <>
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
                            <button >
                                <BsPencil className='icon'></BsPencil>
                            </button>
                            <button onClick={handleDelete}>
                                <BsTrash className='icon'/>
                            </button>
                        </button>
                    </div>
                </tr>
            </tbody>
        </>
    );
};