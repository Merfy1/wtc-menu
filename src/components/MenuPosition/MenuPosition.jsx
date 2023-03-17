import { useState, useEffect } from "react"
import { Modal } from "../Modal/Modal";

const checkElementInArray = (id_position, array) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index].key === id_position){

            return index+1;

        }                     
    }

    return false;
}

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

            const elements = JSON.parse(localStorage.getItem('card'))
            // console.log(elements)

            let resultCheck = checkElementInArray(id_element.id_position, elements)

            console.log("r:",resultCheck)

            if (!resultCheck){


                elements.push({
                    name, price, img, ingridint, count, key: id_element.id_position
                })

                localStorage.setItem('card', JSON.stringify(elements))   

            } else {

                elements[resultCheck - 1].count = count

                localStorage.setItem('card', JSON.stringify([
                    elements
                ]))

            }
            // for (let index = 0; index < elements.length; index++) {
            //     const element = elements[index];
            // }

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
        <div className="card">
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
                            }}>В корзину</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </> 
    )
}