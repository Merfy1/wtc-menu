import React from 'react';
import "../AdminCategory/admincategory.css"

export function AdminComponent ({children}){
    return (
        <div className="main">
            <div className="main-container">
                <div className="main-wrapper">
                    {children}
                </div>
            </div>
        </div>  
    );
};
