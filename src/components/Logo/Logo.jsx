
import React, { useState } from 'react';

export function Logo(){
    const [clickCount, setClickCount] = useState(0);
    const handleClick = () => {
        setClickCount(clickCount + 1);
        if (clickCount === 2) {
          setClickCount(0);
          window.location.href = 'admin';
          localStorage.removeItem('tableNumber');
        }
      };
    return (
        <div>
            <img src="/img/WTC-Logo 1.png" alt="Logo" className="logo" onClick={handleClick}/>
        </div>
    );
};