import React from 'react';
import "./sidebarMore.css"
import { BsDot } from 'react-icons/bs';

export function SidebarMore() {
    return (
        <>
            <div className="sidebarmore">
                <div className="sidebarmore-container">
                    <div className="sidebarmore-wrapper">
                        <h1 className="sidebarmore-title">
                            Подробнее
                        </h1>
                        <div className='line'/>
                        <div className="sidebarmore-items">
                            <div className="sidebarmore-item">
                                <BsDot></BsDot>
                                <span>Вывод</span>
                            </div>
                            <div className="sidebarmore-item">
                                <BsDot></BsDot>
                                <span>Добавить</span>
                            </div>
                            <div className="sidebarmore-item">
                                <BsDot></BsDot>
                                <span>Изменить</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='horizontal-line'/>
        </>
    );
};