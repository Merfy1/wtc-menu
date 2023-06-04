import { BsPencil,  BsTrash } from 'react-icons/bs';
import React from 'react';
export function AdminUsersComponent ({users, onDelete, onUpdate}) {

    const handleDelete = (user) => {
        onDelete(user.id_user);
    }

    return (
        <>
            <td colSpan="7">
                <div className='line'/>
            </td>
            <tbody>
                    {users.map((user) => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>{user.surname}</td>
                            <td>{user.phone}</td>
                            <td>{user.dateBirsdate}</td>
                            <div className="main-table__button">
                                <button> 
                                    <button onClick={() => onUpdate(user.id_user)}>
                                        <BsPencil className='icon'></BsPencil>
                                    </button>
                                    <button onClick={() => {handleDelete(user)}}>
                                        <BsTrash className='icon'/>
                                    </button>
                                </button>
                            </div>
                        </tr>
                    ))}
            </tbody>  
        </>
    );
};