import React from 'react';
import { BsPencil,  BsTrash } from 'react-icons/bs';

export function AdminPositionComponent({position, name, price, categories, ingridint, catigories, onDelete}){

    let nameCategories = ""

    const handleDelete = () => {
        onDelete(position.id_position);
    }

    for (let i = 0; i < catigories.length; i++) {
        if (catigories[i].id_categoria == categories){
            nameCategories = catigories[i].name
        }
    }

    return (
        <>
            <td colSpan="5">
                <div className='line'/>
            </td>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{price + 'руб'}</td>
                    <td>{nameCategories}</td>
                    <td>{ingridint}</td>
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