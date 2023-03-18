import React, { useState, useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";


export function BasketPosition({name, price, img, count}) {
    const [count1, setCount] = useState(1)

    const plus = () =>{
        setCount(count1 + 1)
    };

    const minus = () =>{
        setCount(count1 - 1)
    };

    useEffect(() => {
        if (count1 < 1){
            setCount(1)
        }
    }, [count1]);
    return (
        <div className="modal-basket__position">
            <img src={"http://localhost:3001"+img} alt="" className="modal-basket-img"/>
            <div className="modal-basket__position-info">
                <span className="position-name">{name}</span>
                <span className="position-price">{price}</span>
            </div>
            <div className="modal__position-buy">
                <div className="plus-minus-basket">
                    <button className="btn-count-basket" onClick={minus}>
                        <img src="img/minus-mini.svg" alt=""/>
                    </button>
                    <span className="count-basket">{count1}</span>
                    <button className="btn-count-basket" onClick={plus}>
                        <img src="img/plus-mini.svg" alt=""/>
                    </button>
                </div>
            </div>
            <button className="btn-count-basket" >
                <BsFillTrashFill></BsFillTrashFill>
            </button>
        </div>
    )
}