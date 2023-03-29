import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';

export function AdminSliderComponent ({id, hidden, date_create}) {
    return (
        <>
            <td colspan="5">
                <div className='line'/>
            </td>
            <tbody>
                <tr>
                    <td>{id}</td>    
                    <td>{hidden}</td>
                    <td>{date_create}</td>
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
