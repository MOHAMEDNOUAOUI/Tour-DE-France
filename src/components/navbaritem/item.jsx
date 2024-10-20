import React from 'react'; 
import { Link } from 'react-router-dom';
import './item.css'

const ItemNavbar = ({ text, logo }) => {
  return (
    <div className='bar'>
      {logo && (
        <img 
          src={logo}  
          alt={`${text} logo`} 
          className="max-w-[40px] h-auto align-middle"
        />
      )}
      {text}
    </div>
  );
};

export default ItemNavbar;