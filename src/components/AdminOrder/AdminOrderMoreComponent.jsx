import React, {useState} from 'react';
import { AdminOrderComponent } from './AdminOrderComponent';

export function AdminOrderMoreComponent ({order}){
    const [ShowComponent, setShowComponent] = useState(false);
    
    const handleClick = () => {
        setShowComponent(true);
    };
    return (
            <>
            
                <td colSpan="5">
                    <div className='line'/>
                </td>
                <tbody>
                    <tr>
                        <td>{order.name}</td>
                        <td>{order.price}</td>
                        <td>{order.categories}</td>
                        <td>{order.ingridint}</td>
                        <div className="main-table__button more">
                        </div>
                    </tr>
                </tbody>
            </>
    );
};
