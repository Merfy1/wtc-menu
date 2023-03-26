import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { AiOutlineTags } from 'react-icons/ai';
import { TfiLayoutSlider } from 'react-icons/tfi';
import { HiTemplate } from 'react-icons/hi';
import { MdBorderColor } from 'react-icons/md';
import { ImExit } from 'react-icons/im';
import "./sidebar.css"

export function Sidebar(){
    const [selectedPosition, setSelectedPosition] = useState(null);
    const handlePositionClick = (position) => {
        if (selectedPosition === position) {
          setSelectedPosition(null);
        } else {
          setSelectedPosition(position);
        }
      };
    return (
        <>
            <div className='sidebar'>
                <div className="sidebar-container">
                    <div className="sidebar-wrapper">
                        <div className="sidebar-logo">
                            <img src="/img/WTC-Logo 1.png" alt="" className="logo" />
                        </div>
                        <hr className="line"/>
                        <div className="sidebar-items">
                            <button className={selectedPosition === 1? 'sidebar-item_active' : 'sidebar-item'} onClick={() => handlePositionClick(1)}>
                                <FiUser className='sidebar-icon'></FiUser>
                                <span className='sidebar-text'>Пользователи</span>
                            </button>
                            <button className={selectedPosition === 2? 'sidebar-item_active' : 'sidebar-item'} onClick={() => handlePositionClick(2)}>
                                <AiOutlineTags className='sidebar-icon'></AiOutlineTags>
                                <span className='sidebar-text'>Категории</span>
                            </button>
                            <button className={selectedPosition === 3? 'sidebar-item_active' : 'sidebar-item'} onClick={() => handlePositionClick(3)}>
                                <TfiLayoutSlider className='sidebar-icon'></TfiLayoutSlider>
                                <span className='sidebar-text'>Слайдер</span>
                            </button>
                            <button className={selectedPosition === 4? 'sidebar-item_active' : 'sidebar-item'} onClick={() => handlePositionClick(4)}>
                                <HiTemplate className='sidebar-icon'></HiTemplate>
                                <span className='sidebar-text'>Позиции</span>
                            </button>
                            <button className={selectedPosition === 5? 'sidebar-item_active' : 'sidebar-item'} onClick={() => handlePositionClick(5)}>
                                <MdBorderColor className='sidebar-icon'></MdBorderColor>
                                <span className='sidebar-text'>Заказы</span>
                            </button>
                        </div>
                        <hr className="line"/>
                        <button className="sidebar-exit">
                            <ImExit className='sidebar-icon'></ImExit>
                            <span className='sidebar-text'>Выход</span>
                        </button>
                    </div>
                </div>   
            </div>
        </>
    );
};
