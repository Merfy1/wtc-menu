import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BsBasket } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { ModalBasket } from "../ModalBasket/ModalBasket";
import './menuHeader.css';
import "../AdminSidebar/sidebar.css";
import '../ModalBasket/modalBasket.css'
import { Menucategories } from "../MenuCategories/Menucategories";
import { BasketPosition } from "../BasketPosition/BasketPosition";
import emailjs from 'emailjs-com';
import { Logo } from "../Logo/Logo";
import { ModalTable } from "../ModalBasket/ModalTable";

export const MyContext = React.createContext();

export function MenuHeader( {setPositions} ) {
    const [modalActive, setModalActive] = useState(false)
    const [modalActive1, setModalActive1] = useState(true)
    const [modalActive2, setModalActive2] = useState(false)
    const [modalActive3, setModalActive3] = useState(false)

    const [modalValidateRegister, setModalValidateRegister] = useState(false)
    const [validateCodeRegister, setValidateCodeRegister] = useState("")

    const [modalLK, setModalLk] = useState(false)

    const [userInfo, setUserInfo] = useState(null)

    const [showCode, setShowCode] = useState(false)
    const [catigories, stateCatigories] = useState([])
    const [positionsBasket, setPositionsBasket] = useState([])
    const [finalPrice, setFinalPrice] = useState(0)
    const [typePay, setTypePay] = useState('')
    const [basket_active, setBasketActive] = useState(false)
    const [tableNumber, setTableNumber] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState('');
    const [phone, setPhone] = useState("");
    const [phoneReg, setPhoneReg] = useState(0);
    const [nameUser, setNameUser] = useState("");
    const [surnameUser, setSurnameUser] = useState("");
    const [lastNameUser, setLastNameUser] = useState("");
    const [dateBirthdayUser, setDateBirthdayUser] = useState("");
    const [code, setCode] = useState(0);
    const [user, setUser] = useState([]);
    const restNum = localStorage.getItem('restNumber');

    const handleOrderSubmit = () => {
      localStorage.setItem("tableNumber", tableNumber);
      localStorage.setItem('restNumber', selectedRestaurant);
      setModalActive1(false)
      window.location.reload();
    };

    useEffect(() => {
        const storedTableNumber = localStorage.getItem("tableNumber");  
        if (storedTableNumber) {
          setTableNumber(storedTableNumber);
          setModalActive1(false);
        } else {
            setModalActive1(true);
        }
    }, []);

    const handleTableNumberChange = (e) => {
      setTableNumber(e.target.value);
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/api/public/categories/${restNum}`, {
        }).then((e) => {
            stateCatigories(e.data.catigories)
            setPositions(e.data.catigories)
        })

        axios.get(`http://localhost:3001/api/public/listRestoran/`, {})
        .then((response ) => {
            setRestaurants(response.data.listRestoran)
            setSelectedRestaurant(response.data.listRestoran[0].id);
        })
        .catch(error => {
            console.error(error);
        });
    },[],)
    
    const handleSelectChange = (event) => {
        setSelectedRestaurant(event.target.value);
    };
    
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

        }
        else {
            setBasketActive(false)
        }  
    }
      
    setTimeout(sayHi, 100);

    const toggleCode = () => {
        setShowCode(!showCode);
    };

    useEffect(() => {
        const elements = JSON.parse(localStorage.getItem('card'))
        setPositionsBasket(elements)
    },[],)

    const getUserInfo = async () => {
        await axios.post('http://localhost:3001/api/public/lk/info', {
                token: localStorage.getItem("castomerToken")
        })
            .then((res) => {
                const data = res?.data
                setUserInfo({...data})
            })
            .catch((err) => {
                localStorage.removeItem('castomerToken')
            })
    }

    async function auth(e) {
        e.preventDefault();
        if (!showCode){
            await axios.post('http://localhost:3001/api/public/lk/login', {
                phone: parseInt(phone)
            })
            .then((res) => {
                setShowCode(true)
            })
            .catch((err) => {
                console.log(err)
                if(err.response.status == 404) {
                    setModalActive2(false);
                    setModalActive3(true);
                }
            })

        }   else {
            
            await axios.post('http://localhost:3001/api/public/lk/login/code', {
                phone: parseInt(phone),
                code: parseInt(code)
            })
            .then(async (res) => {
                // console.log(res?.data?.token)
                localStorage.setItem('castomerToken', res?.data?.token)
                setModalActive2(false)
                await getUserInfo()
            })
            .catch(() => {
                setShowCode(false)
                setCode("")
            })
        
        }
    }

    async function reg(e) {
        e.preventDefault();
        const regResult = await axios.post('http://localhost:3001/api/public/lk/register', {
            phone: parseInt(phoneReg),
            name: nameUser,
            surname: surnameUser,
            lastname: lastNameUser,
            dateBirsday: dateBirthdayUser
        })
        .then((res) => {
            setUser(res)
            console.log(res.data)
            localStorage.setItem('phoneRegister', phoneReg)
            setModalActive3(false)
            setModalValidateRegister(true)
        })
        .catch((err) => {
            console.log(err)
            console.log()
            if(err.response.status == 404) {
                setModalActive2(false);
                setModalActive3(true);
            }
        })
    }
    

    const validateRegisterUser = async () => {
        await axios.post('http://localhost:3001/api/public/lk/register/code', {
            phone: parseInt(phoneReg),
            code: parseInt(validateCodeRegister),
        })
        .then((res) => {
            console.log(res)
            localStorage.setItem('castomerToken', res?.data?.token)
            setModalValidateRegister(false)
            getUserInfo()
        })
        .catch((err) => {
            console.log(err)
                setModalValidateRegister(false)
                setModalActive3(true);
        })
    }

    const clickOpenLk = () => {
        console.log(localStorage.getItem('castomerToken'))
        if (localStorage.getItem('castomerToken') === null ) {
            setModalActive2(true)
        } else {
            setModalLk(true);
        }
    }

    const exitAccount = () => {
        localStorage.removeItem('castomerToken')
        setModalLk(false)
    }

    return(
        <>
        <div className="header">
            <div className="container">
                <ModalTable active={modalActive1} setActive={setModalActive1}> 
                        <div className="modal-info photo">
                            <h2 className='modal-title' photo>Введите номер столика:</h2>
                            <input className="table-number"
                                type="number"
                                value={tableNumber}
                                onChange={handleTableNumberChange}
                            />
                            <h2 className='sidebar-modal-text' photo>Выберите ресторан:</h2>
                            <select className="sidebar-select" value={selectedRestaurant} onChange={handleSelectChange}>
                                {restaurants.map(item => (
                                    <option className="sidebar-option" key={item.id} value={item.id}>{item.name}</option>
                                ))}
                            </select>
                            <button className="buy-position photo" onClick={handleOrderSubmit}>Сохранить</button>
                        </div>   
                </ModalTable>
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
                        <button onClick={() => clickOpenLk()} className='basket-icon'><FaRegUserCircle></FaRegUserCircle></button>
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
                            <button onClick={twoFunction} className="modal-basket__button-buy">{'Оформить ' + finalPrice + ' руб'}</button>
                        </div>
                    </>
                )
            }
        </ModalBasket>
        <ModalBasket active={modalActive2} setActive={setModalActive2}>
            {
                modalActive2 && (
                    <>
                        <span className="modal-basket__title">Вход</span>
                        <hr className="line"/>
                        <form >
                            <div className="modal-basket__change-pay">
                                <span className="change-pay__title">Номер телефона</span>
                                <input type='number' className="auth-modal" value={phone} onChange={e => setPhone(e.target.value)}  ></input>
                                {showCode && (
                                    <>
                                        <span className="change-pay__title">Код авторизации</span>
                                        <input type='text' className="auth-modal" value={code} onChange={(e) => setCode(e.target.value)} ></input>
                                    </>
                                )}
                            </div>
                        </form>
                        <hr className="line"/>
                        <div className="buy-basket" >
                            <button onClick={(e) =>auth(e)} className="modal-basket__button-buy">Войти</button>
                        </div>
                    </>
                )
            }
        </ModalBasket>
        <ModalBasket active={modalActive3} setActive={setModalActive3}>
            {
                modalActive3 && (
                    <>
                        <span className="modal-basket__title">Вход</span>
                        <hr className="line"/>
                        <form >
                            <div className="modal-basket__change-pay">
                                <span className="change-pay__title">Номер телефона</span>
                                <input type='number' className="auth-modal" value={phoneReg} onChange={e => setPhoneReg(e.target.value)}  ></input>
                                <span className="change-pay__title">Имя</span>
                                <input type='text' className="auth-modal" value={nameUser} onChange={e => setNameUser(e.target.value)}  ></input>
                                <span className="change-pay__title">Фамилия</span>
                                <input type='text' className="auth-modal" value={surnameUser} onChange={e => setSurnameUser(e.target.value)}  ></input>
                                <span className="change-pay__title">Отчество</span>
                                <input type='text' className="auth-modal" value={lastNameUser} onChange={e => setLastNameUser(e.target.value)}  ></input>
                                <span className="change-pay__title">Дата рождения</span>
                                <input type='text' className="auth-modal" value={dateBirthdayUser} onChange={e => setDateBirthdayUser(e.target.value)}  ></input>
                            </div>
                        </form>
                        <hr className="line"/>
                        <div className="buy-basket" >
                            <button onClick={(e) =>reg(e)} className="modal-basket__button-buy">Войти</button>
                        </div>
                    </>
                )
            }
        </ModalBasket>
        <ModalBasket active={modalValidateRegister} setActive={setModalValidateRegister}>
            {
                modalValidateRegister && (
                    <>
                        <span className="modal-basket__title">Вход</span>
                        <hr className="line"/>
                        <div >
                            <div className="modal-basket__change-pay">
                                <span className="change-pay__title">Код с СМС:</span>
                                <input type="text" className="auth-modal" value={validateCodeRegister} onChange={e => setValidateCodeRegister(e.target.value)}  ></input>
                            </div>
                        </div>
                        <hr className="line"/>
                        <div className="buy-basket" onClick={() =>validateRegisterUser()}>
                            <button className="modal-basket__button-buy">Зарегистрироваться</button>
                        </div>
                    </>
                )
            }
        </ModalBasket>
        <ModalBasket active={modalLK} setActive={setModalLk}>
            {
                modalLK && (
                    <>
                        <span className="modal-basket__title">Личный кабинет</span>
                        <hr className="line"/>
                        <div >
                            <div className="modal-basket__change-pay">
                                {
                                    userInfo && (
                                        <>
                                        <p>Имя: {userInfo?.name}</p>
                                        <p>Фамилия: {userInfo?.lastname}</p>
                                        <p>Баллы на счету: {userInfo?.balance}</p>
                                        </>
                                    )
                                }
                            </div>
                            
                        </div>
                        <div className="buy-basket" onClick={() =>exitAccount()}>
                            <button className="modal-basket__button-buy">Выйти</button>
                        </div>
                    </>
                )
            }
        </ModalBasket>
        </>    
    )
}