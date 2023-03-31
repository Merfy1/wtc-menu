import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';

export function AdminOrderComponent ({id_order, time, status, table}) {
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
                            <BsPencil className='icon'></BsPencil>
                            <BsTrash className='icon'/>
                        </button>
                    </div>
                </tr>
            </tbody>
        </>
    );
};