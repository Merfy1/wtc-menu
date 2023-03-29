import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';

export function AdminUserComponent ({name, lastname, surname, nickname}){
    return (
        <>
           <td colSpan="5">
                <div className='line'/>
            </td>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{surname}</td>
                    <td>{lastname}</td>
                    <td>{nickname}</td>
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