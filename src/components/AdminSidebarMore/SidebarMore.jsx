import React, { useState } from 'react';
import "./sidebarMore.css"
import { BsDot } from 'react-icons/bs';

export function SidebarMore() {
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
            <div className="sidebarmore">
                <div className="sidebarmore-container">
                    <div className="sidebarmore-wrapper">
                        <h1 className="sidebarmore-title">
                            Подробнее
                        </h1>
                        <div className='sidebarmore-line'/>
                        <div className="sidebarmore-items">
                            <button className={selectedPosition === 1? 'sidebarmore-item_active' : 'sidebarmore-item'} onClick={() => handlePositionClick(1)}>
                                <BsDot className='sidebarmore-icon'></BsDot>
                                <span className='sidebarmore-text'>Вывод</span>
                            </button>
                            <button className={selectedPosition === 2? 'sidebarmore-item_active' : 'sidebarmore-item'} onClick={() => handlePositionClick(2)}>
                                <BsDot className='sidebarmore-icon'></BsDot>
                                <span className='sidebarmore-text'>Добавить</span>
                            </button>
                            <button className={selectedPosition === 3? 'sidebarmore-item_active' : 'sidebarmore-item'} onClick={() => handlePositionClick(3)}>
                                <BsDot className='sidebarmore-icon'></BsDot>
                                <span className='sidebarmore-text'>Изменить</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='horizontal-line'/>
        </>
    );
};