import React, { useState, useEffect, useMemo } from "react";
import axios, {isCancel, AxiosError} from 'axios';
import { BsBasket } from "react-icons/bs";
import { ModalBasket } from "../ModalBasket/ModalBasket";
import './menuHeader.css'
import '../ModalBasket/modalBasket.css'
import { Menucategories } from "../MenuCategories/Menucategories";
import { BasketPosition } from "../BasketPosition/BasketPosition";


export function MenuHeader( {setPositions} ) {
    const [modalActive, setModalActive] = useState(false)
    const [catigories, stateCatigories] = useState([])
    const [positionsBasket, setPositionsBasket] = useState([])
    const [finalPrice, setFinalPrice] = useState(0)

    useEffect(() => {
        axios.get('http://localhost:3001/api/public/categories', {
        }).then((e) => {
            stateCatigories(e.data.catigories)
            setPositions(e.data.catigories)
        })
    },
    [],
    )
    
    let coutns = 0
    
    function sayHi() {
        const elements = JSON.parse(localStorage.getItem('card'))
        setPositionsBasket(elements)
        
        for (let i = 0; i < positionsBasket?.length; ++i){
            let sum = (positionsBasket[i].price * positionsBasket[i].count)

            coutns += sum
        }

        setFinalPrice(coutns)
        coutns = 0
    }
      
    setTimeout(sayHi, 1000);

    useEffect(() => {
        const elements = JSON.parse(localStorage.getItem('card'))
        setPositionsBasket(elements)
    },
    [],
    )
    return(
        <>
        <div className="header">
            <div className="container">
                <div className="header-wrapper">
                    <img src="/img/WTC-Logo 1.png" alt="Logo" className="logo"/>
                    <nav className="navbar">
                        <ul className="navbar-ul">
                        {catigories?.map((category) =>
                            <Menucategories key={category.id} name={category.name} />
                        )}
                        </ul>
                    </nav>
                    <button onClick={() => setModalActive(true)} className="basket-icon"><BsBasket></BsBasket></button>
                </div>
            </div>         
        </div>   
        <ModalBasket active={modalActive} setActive={setModalActive}>
            {
                modalActive && (
                    <>
                        <div className="modal__close" data-close>&times;</div>
                        <span className="modal-basket__title">Корзина</span>
                        <hr className="line"/>
                        {positionsBasket?.map((positionsBasket) =>
                            <BasketPosition id={positionsBasket.key}  key={positionsBasket.key} count={positionsBasket.count} name={positionsBasket.name} price={positionsBasket.price} img={positionsBasket.img}/>
                        )}
                        <hr className="line"/>
                        <div className="modal-basket__change-pay">
                            <span className="change-pay__title">Выберите способ оплаты</span>
                            <label> 
                                <input type='radio' className="radio-modal">
                                </input>
                                Картой
                            </label>
                            <label> 
                                <input type='radio' className="radio-modal" >
                                </input>
                                Наличными
                            </label>
                        </div>
                        <hr className="line"/>
                        <div className="buy-basket">
                            <button className="modal-basket__button-buy">{finalPrice + ' руб'}</button>
                        </div>
                    </>
                )
            }
            
        </ModalBasket>
        </>    
    )
}