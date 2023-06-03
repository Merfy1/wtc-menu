import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FiUser } from 'react-icons/fi';
import { AiOutlineTags } from 'react-icons/ai';
import { TfiLayoutSlider } from 'react-icons/tfi';
import { HiTemplate } from 'react-icons/hi';
import { BiFoodMenu } from 'react-icons/bi';
import { MdBorderColor } from 'react-icons/md';
import { ImExit } from 'react-icons/im';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { AdminPosition } from '../AdminPosition/AdminPosition';
import { AdminCategory } from '../AdminCategory/AdminCategory';
import { AdminUser } from '../AdminUser/AdminUser';
import { AdminSlider } from '../AdminSlider/AdminSlider';
import { AdminOrder } from '../AdminOrder/AdminOrder';
import { AdminMain } from '../AdminMain/AdminMain';
import { AdminRestaurant } from '../AdminRestaurant/AdminRestaurant';
import { ModalTable } from "../ModalBasket/ModalTable";
import "./sidebar.css"

const Component1 = () => {return <AdminMain></AdminMain>};
const Component2 = () => {return <AdminUser></AdminUser>};
const Component3 = () => {return <AdminCategory></AdminCategory>};
const Component4 = () => {return <AdminSlider></AdminSlider>};
const Component5 = () => {return <AdminPosition></AdminPosition>};
const Component6 = () => {return <AdminOrder></AdminOrder>};
const Component7 = () => {return <AdminRestaurant></AdminRestaurant>};

export function Sidebar(){
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [activeComponent, setActiveComponent] = useState(1);
    const [isClicked, setIsClicked] = useState(false);
    const [modalActive, setModalActive] = useState(true)
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState('');
    const access_token = localStorage.getItem('tokenLogin'); // получаем токен из localStorage
    const headers = {
        Authorization: access_token,
    };

    const handlePositionClick = (position) => {
        if (selectedPosition === position) {
          setSelectedPosition(null);
        } else {
          setSelectedPosition(position);
        }
    };
    
    const handleButtonClick = (componentNumber) => {
        setActiveComponent(componentNumber);
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const handleLogOut = () =>{
        localStorage.removeItem('tokenLogin')
        localStorage.removeItem('restNumber')
        window.location.reload()
    }
    
    useEffect(() => {
        axios.get(`http://localhost:3001/api/admin/restoran/`, {headers})
        .then((response ) => {
            setRestaurants(response.data)
            setSelectedRestaurant(response.data[0].id);
        })
        .catch(error => {
            console.error(error);
        });
    },[],)

    const handleSelectChange = (event) => {
        setSelectedRestaurant(event.target.value);
    };

    const handleSave = () => {
        localStorage.setItem('restNumber', selectedRestaurant);
        setModalActive(false);
    };

    return (
        <>
            <div className='sidebar'>
                <ModalTable active={modalActive} setActive={setModalActive}> 
                        <div className="modal-info photo">
                            <h2 className='sidebar-modal-text' photo>Выберите ресторан:</h2>
                            <select className="sidebar-select" value={selectedRestaurant} onChange={handleSelectChange}>
                                {restaurants.map(item => (
                                    <option className="sidebar-option" key={item.id} value={item.id}>{item.name}</option>
                                ))}
                            </select>
                            <button className="buy-position photo" onClick={handleSave}>Сохранить</button>
                        </div>   
                </ModalTable>
                {isClicked ? (
                    <div className="sidebar-container_hide">
                        <div className="sidebar-wrapper">
                            <div className="sidebar-logo">
                                <img src="/img/WTC-kvad.png" alt="" className="logo_hide" />
                            </div>
                            <div className="line"/>
                            <div className="sidebar-items">
                                <button className={selectedPosition === 1? 'sidebar-item_active' : 'sidebar-item'} onClick={() => {handlePositionClick(1); handleButtonClick(2);}}>
                                    <FiUser className='sidebar_hiden-icon'></FiUser>
                                </button>
                                <button className={selectedPosition === 2? 'sidebar-item_active' : 'sidebar-item'} onClick={() => {handlePositionClick(2); handleButtonClick(3);}}>
                                    <AiOutlineTags className='sidebar_hiden-icon'></AiOutlineTags>
                                </button>
                                <button className={selectedPosition === 3? 'sidebar-item_active' : 'sidebar-item'} onClick={() => {handlePositionClick(3); handleButtonClick(4);}}>
                                    <TfiLayoutSlider className='sidebar_hiden-icon'></TfiLayoutSlider>
                                </button>
                                <button className={selectedPosition === 4? 'sidebar-item_active' : 'sidebar-item'} onClick={() => {handlePositionClick(4); handleButtonClick(5);}}>
                                    <HiTemplate className='sidebar_hiden-icon'></HiTemplate>
                                </button>
                                <button className={selectedPosition === 5? 'sidebar-item_active' : 'sidebar-item'} onClick={() => {handlePositionClick(5); handleButtonClick(6);}}>
                                    <MdBorderColor className='sidebar_hiden-icon'></MdBorderColor>
                                </button>
                            </div>
                            <div className="line"/>
                            <button className="sidebar-exit" onClick={() => {handleLogOut()}}>
                                <ImExit className='sidebar_hiden-icon'></ImExit>
                            </button>
                            <button className="sidebar-hide">
                                <MdArrowForwardIos onClick={handleClick} className='sidebar-hide__icon'></MdArrowForwardIos>
                            </button>
                        </div>
                    </div>
                ):(
                    <div className="sidebar-container">
                        <div className="sidebar-wrapper">
                            <div className="sidebar-logo">
                                <img src="/img/WTC-Logo 1.png" alt="" className="logo" />
                            </div>
                            <div className="line"/>
                            <div className="sidebar-items">
                                <button className={selectedPosition === 1? 'sidebar-item_active' : 'sidebar-item'} onClick={() => {handlePositionClick(1); handleButtonClick(2);}}>
                                    <FiUser className='sidebar-icon'></FiUser>
                                    <span className='sidebar-text'>Пользователи</span>
                                </button>
                                <button className={selectedPosition === 2? 'sidebar-item_active' : 'sidebar-item'} onClick={() => {handlePositionClick(2); handleButtonClick(3);}}>
                                    <AiOutlineTags className='sidebar-icon'></AiOutlineTags>
                                    <span className='sidebar-text'>Категории</span>
                                </button>
                                <button className={selectedPosition === 3? 'sidebar-item_active' : 'sidebar-item'} onClick={() => {handlePositionClick(3); handleButtonClick(4);}}>
                                    <TfiLayoutSlider className='sidebar-icon'></TfiLayoutSlider>
                                    <span className='sidebar-text'>Слайдер</span>
                                </button>
                                <button className={selectedPosition === 4? 'sidebar-item_active' : 'sidebar-item'} onClick={() => {handlePositionClick(4); handleButtonClick(5);}}>
                                    <HiTemplate className='sidebar-icon'></HiTemplate>
                                    <span className='sidebar-text'>Позиции</span>
                                </button>
                                <button className={selectedPosition === 5? 'sidebar-item_active' : 'sidebar-item'} onClick={() => {handlePositionClick(5); handleButtonClick(6);}}>
                                    <MdBorderColor className='sidebar-icon'></MdBorderColor>
                                    <span className='sidebar-text'>Заказы</span>
                                </button>
                                <button className={selectedPosition === 6? 'sidebar-item_active' : 'sidebar-item'} onClick={() => {handlePositionClick(6); handleButtonClick(7);}}>
                                    <BiFoodMenu className='sidebar-icon'></BiFoodMenu>
                                    <span className='sidebar-text'>Рестораны</span>
                                </button>

                            </div>
                            <div className="line"/>
                            <button className="sidebar-exit" onClick={() => {handleLogOut()}}>
                                <ImExit className='sidebar-icon'></ImExit>
                                <span className='sidebar-text'>Выход</span>
                            </button>
                            <button className="sidebar-hide">
                                <MdArrowBackIosNew onClick={handleClick} className='sidebar-hide__icon'></MdArrowBackIosNew>
                            </button>
                        </div>
                    </div>
                )}
                   
            </div>
            {/* <SidebarMore></SidebarMore> */}
            {activeComponent === 1 && <AdminMain />}
            {activeComponent === 2 && <Component2 /> }
            {activeComponent === 3 && <Component3/>}
            {activeComponent === 4 && <Component4 />}
            {activeComponent === 5 && <Component5 />}
            {activeComponent === 6 && <Component6 />}
            {activeComponent === 7 && <Component7 />}
        </>
    );
};
