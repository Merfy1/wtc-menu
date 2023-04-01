import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';
import axios from 'axios';

export function AdminUserComponent ({user, onDelete}){
    const handleDelete = () => {
        onDelete(user.id_employeer);
      }
    return (
        <>
           <td colSpan="5">
                <div className='line'/>
            </td>
            <tbody>
                <tr>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.nickname}</td>
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