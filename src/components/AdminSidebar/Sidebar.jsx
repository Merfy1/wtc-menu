import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { AiOutlineTags } from 'react-icons/ai';
import { TfiLayoutSlider } from 'react-icons/tfi';
import { HiTemplate } from 'react-icons/hi';
import { MdBorderColor } from 'react-icons/md';
import { ImExit } from 'react-icons/im';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { AdminPosition } from '../AdminPosition/AdminPosition';
import { AdminCategory } from '../AdminCategory/AdminCategory';
import { AdminUser } from '../AdminUser/AdminUser';
import { AdminSlider } from '../AdminSlider/AdminSlider';
import { AdminOrder } from '../AdminOrder/AdminOrder';
import { AdminMain } from '../AdminMain/AdminMain';
import "./sidebar.css"
import { SidebarMore } from '../AdminSidebarMore/SidebarMore';

const SlidebarMore = () => {
    return <SidebarMore></SidebarMore>;
  };

const Component1 = () => {
    return <AdminMain></AdminMain>

  };
  
  const Component2 = () => {
    return (
        <>
            <SidebarMore></SidebarMore>
            <AdminUser></AdminUser>
        </>
    )
  };
  
  const Component3 = () => {
    return (
        <>
            <SidebarMore></SidebarMore>
            <AdminCategory></AdminCategory>
        </>
    )
  };
  
  const Component4 = () => {
    return (
        <>
            <SidebarMore></SidebarMore>
            <AdminSlider></AdminSlider>
        </>
    )
  };
  
  const Component5 = () => {
    return (
        <>
            <SidebarMore></SidebarMore>
            <AdminPosition></AdminPosition>
        </>
    )
  };

  const Component6 = () => {
    return (
        <>
            <SidebarMore></SidebarMore>
            <AdminOrder></AdminOrder>
        </>
    )
  };

export function Sidebar(){
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [activeComponent, setActiveComponent] = useState(1);
    const [isClicked, setIsClicked] = useState(false);
    
    // const [showComponent1, setShowComponent1] = useState(true);
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
        window.location.reload()
    }
    return (
        <>
            <div className='sidebar'>
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
                            <button className="sidebar-exit" onClick={() => {
                                localStorage.removeItem('tokenLogin')
                                window.location.reload()
                            }}>
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
                            </div>
                            <div className="line"/>
                            <button className="sidebar-exit" onClick={() => {
                                localStorage.removeItem('tokenLogin')
                                window.location.reload()
                            }}>
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
        </>
    );
};