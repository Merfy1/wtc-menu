import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";

export function AdminOrderComponent ({onDelete, id_order, time, status, table, onEdit}) {
    
    const handleDelete = () => {
        onDelete(id_order);
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
                            <button>
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
    );
};