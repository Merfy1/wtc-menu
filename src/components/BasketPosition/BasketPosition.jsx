import React, { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";

export function BasketPosition({id, key, name, price, img, count}) {
    const [count1, setCount] = useState(count)
    const [deletePositon, setDeletePositon] = useState([])

    const plus = () =>{
        setCount(count1 + 1)
        updateCount(id, count + 1)
    };

    const minus = () =>{
        setCount(count1 - 1)
        updateCount(id, count - 1)
    };

    useEffect(() => {
        if (count1 < 1){
            setCount(1)
        }
    }, [count1]);

    const updateCount = (id, newCount) => {
        if (newCount < 1) return 
        console.log(`updateCount` + id + `: ${newCount}`)
        const element =  JSON.parse(localStorage.getItem('card'))
        element.map((element3, index) => {
            if (element[index]?.key === id){
                element[index].count = newCount
            }
        }) 

        // element[id].count = newCount
        
        localStorage.setItem('card', JSON.stringify(element))
    }

    function deletePositionBasket(){
        const element =  JSON.parse(localStorage.getItem('card'))
        // console.log(id)
        
        let newElement = []
        newElement = element
        element.map((element3, index) => {
            if (element[index]?.key === id){
                newElement.splice(index, 1)
            }
        })
            localStorage.setItem('card', JSON.stringify(newElement))
            return
        
    }
    return (
        <div className="modal-basket__position">
            <img src={"http://45.12.237.227:3001"+img} alt="" className="modal-basket-img"/>
            <div className="modal-basket__position-info">
                <span className="position-name">{name}</span>
                <span className="position-price">{price + ' руб'}</span>
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
            <button className="btn-trash" onClick={deletePositionBasket}>
                <BsTrash/>
            </button>
        </div>
    )
}