import React, { useState, useEffect, useMemo, useContext  } from "react";
import axios, {isCancel, AxiosError} from 'axios';
import { BsBasket } from "react-icons/bs";
import { ModalBasket } from "../ModalBasket/ModalBasket";
import './menuHeader.css'
import '../ModalBasket/modalBasket.css'
import { Menucategories } from "../MenuCategories/Menucategories";
import { BasketPosition } from "../BasketPosition/BasketPosition";
import emailjs from 'emailjs-com';
import { Logo } from "../Logo/Logo";

export const MyContext = React.createContext();

export function MenuHeader( {setPositions} ) {
    const [modalActive, setModalActive] = useState(false)
    const [catigories, stateCatigories] = useState([])
    const [positionsBasket, setPositionsBasket] = useState([])
    const [finalPrice, setFinalPrice] = useState(0)
    const [typePay, setTypePay] = useState('')
    const [basket_active, setBasketActive] = useState(false)
    const [tableNumber, setTableNumber] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const storedTableNumber = localStorage.getItem("tableNumber");
        if (storedTableNumber) {
          setTableNumber(storedTableNumber);
        } else {
          setModalVisible(true); // Если номера нет, открываем модальное окно
        }
      }, []);

      const handleTableNumberChange = (e) => {
        setTableNumber(e.target.value);
      };

      const handleOrderSubmit = () => {
        localStorage.setItem("tableNumber", tableNumber); // Сохраняем номер столика в localStorage
        setModalVisible(false); // Закрываем модальное окно
      };

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
    function twoFunction(){
        sendOrder()
        sendMail()
    }
    function sendOrder() {
        const tableId = localStorage.getItem('tableNumber');
        const card = JSON.parse(localStorage.getItem('card'));
        const orderData = {
            table_id: parseInt(tableId),
            positions: card.map(item => ({
                count: item.count,
                id_positions: item.key,
                price_positions: item.price
            }))
        };
        axios.post('http://localhost:3001/api/public/order', orderData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
            console.log(orderData)
        });
    }

    function sendMail () {
        setModalActive(false)
        if (typePay === '' ){
            return alert('Не выбран способ оплаты');
        }

        if (!positionsBasket.length) {
            return
        }

        let zakaz = '';

        positionsBasket?.map((positionsBasket) => {
            zakaz += positionsBasket.name + ' - ' + positionsBasket.count + ' шт.' + ' - ' + positionsBasket.price + ' руб' + ' \n';
        })

        zakaz += "\n\nСпособ оплаты: " + typePay;

    emailjs.send('service_isdyzs9', 'template_4hrk63c', {message: zakaz}, 'gHcdNx_UCNyEUzLaN')
      .then((result) => {
        localStorage.clear();
        alert('Заказ отправлен');
      }, (error) => {
          console.log(error.text);
      });
    }

    function sayHi() {
        const elements = JSON.parse(localStorage.getItem('card'))
        setPositionsBasket(elements)
        
        let countTovar = 0

        for (let i = 0; i < positionsBasket?.length; ++i){
            let sum = (positionsBasket[i].price * positionsBasket[i].count)
            countTovar += 1
            coutns += sum
        }

        setFinalPrice(coutns)
        coutns = 0

        if (positionsBasket?.length > 0) {
            setBasketActive(countTovar)

        }   else {
            setBasketActive(false)
        }
        
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
            {modalVisible && (
                <div className="">
                <h2>Введите номер столика:</h2>
                <input
                    type="text"
                    value={tableNumber}
                    onChange={handleTableNumberChange}
                />
                <button onClick={handleOrderSubmit}>Отправить заказ</button>
                </div>
            )}    
                <div className="header-wrapper">
                    <Logo></Logo>
                    <nav className="navbar">
                    <MyContext.Provider value={catigories}>
                        <ul className="navbar-ul">
                        {catigories?.map((category) =>
                            <Menucategories key={category.id} name={category.name} />
                        )}
                        </ul>
                    </MyContext.Provider>
                    </nav>
                    <div className="basket-wrapper">
                        <span className={basket_active ? "basket-span active" : "basket-span"}>{basket_active}</span>
                        <button onClick={() => setModalActive(true)} className='basket-icon'><BsBasket></BsBasket></button>
                    </div>
                </div>
            </div>  
        </div>
        <ModalBasket active={modalActive} setActive={setModalActive}>
            {
                modalActive && (
                    <>
                        <span className="modal-basket__title">Корзина</span>
                        <hr className="line"/>
                        <div className="modal-basket__position-container">
                            {positionsBasket?.map((positionsBasket) =>
                                <BasketPosition id={positionsBasket.key}  key={positionsBasket.key} count={positionsBasket.count} name={positionsBasket.name} price={positionsBasket.price} img={positionsBasket.img}/>
                            )}
                        </div>
                        <hr className="line"/>
                        <form >
                            <div className="modal-basket__change-pay">
                                <span className="change-pay__title">Выберите способ оплаты</span>
                                <label> 
                                    <input name="option" type='radio' className="radio-modal" value="Картой"  onChange={(e) => {setTypePay(e.target.value)}}>
                                    </input>
                                    Картой
                                </label>
                                <label> 
                                    <input name="option" type='radio' className="radio-modal" value="Наличные" onChange={(e) => {setTypePay(e.target.value)}}>
                                    </input>
                                    Наличными
                                </label>
                            </div>
                        </form>
                        <hr className="line"/>
                        <div className="buy-basket" >
                            <button onClick={twoFunction} className="modal-basket__button-buy">{finalPrice + ' руб'}</button>
                        </div>
                    </>
                )
            }
        </ModalBasket>
        </>    
    )
}