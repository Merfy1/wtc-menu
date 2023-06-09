import { useState, useEffect } from "react"
import { Modal } from "../Modal/Modal";
import "../MenuPositions/menuPositions.css"

export function MenuPosition({name, price, img, ingridint, key, id_position, id_element}) {
    const [modalActive, setModalActive] = useState(false)
    const [count, setCount] = useState(1)
    const plus = () =>{
        setCount(count + 1)
    };

    const minus = () =>{
        setCount(count - 1)
    };

    useEffect(() => {
        if (count < 1){
            setCount(1)
        }
    }, [count]);

        // let elements1 = JSON.parse(localStorage.getItem('card'))
        // checkElementInArray(id_element.id_position, elements1) && setCount(elements1[checkElementInArray(id_element.id_position, elements1) - 1].count)


    const addPositions = () => {
        if (localStorage.getItem('card')){
            setModalActive(false)
            const elements = JSON.parse(localStorage.getItem('card'))
            let elementIDin

            const checkPosition = (elements) => {
                for (let i = 0; i < elements.length; ++i){

                    if (elements[i].key === id_element.id_position){
                        elementIDin = i
                        return true
                    }
                }
                return false
            }

            if (!checkPosition(elements)){

                localStorage.setItem('card', JSON.stringify([
                    ...elements,{
                        name, price, img, ingridint, count, key: id_element.id_position
                    }
                ]))

                return
            }

            const getCount = elements[elementIDin].count

            elements[elementIDin].count = getCount + count

            localStorage.setItem('card', JSON.stringify(
                elements
            ))
        }  else {
            localStorage.setItem('card', JSON.stringify([
                {
                    name, price, img, ingridint, count, key: id_element.id_position
                }
            ]))

        }
    }
    
    

    return(
        <>
        <div className="card" onClick={() => setModalActive(true)}>
            <img src={"http://localhost:3001"+img} alt="" className="card-img"/>
            <span className="card-title">{name}</span>
            <span className="card-price">{price + " руб"}</span>
            <button onClick={() => setModalActive(true)} className="card-buy">В корзину</button>
        </div>    
         <Modal active={modalActive} setActive={setModalActive}>
                <div className="modal-img">
                    <img  src={"http://localhost:3001"+img} alt="tom" className="img-for-modal"/>
                </div>
                <div className="modal-info">
                    <div className="position-info">
                        <span className="modal-title">{name}</span>
                        <span className="modal-subtitle">{ingridint}</span>
                        <span className="modal-title">{price+" руб"}</span>
                    </div>
                    <div className="position-buy">
                        <div className="plus-minus">
                            <button className="btn-count" onClick={minus}>
                                <img src="img/minuus.svg" alt=""/>
                            </button>
                            <span className="count">{count}</span>
                            <button className="btn-count" onClick={plus}>
                                <img src="img/plus.svg" alt=""/>
                            </button>
                        </div>
                        <div className="buy-basket">
                            <button className="buy-position" onClick={() => {
                                  addPositions()
                            }}>Добавить</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </> 
    )
}