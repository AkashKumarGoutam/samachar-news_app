import React from 'react';
import './CardSimmerEffect.css'; // Import CSS file for styling

const CardSimmerEffect = () => {
  return (
    <div className='container d-flex flex-wrap gap-4 justify-content-center align-items-center  ' style={{marginTop:"70px"}}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className='card simmer-card'>
            <div className='simmer-effect'></div>
          </div>
        ))}
    </div>
  );
}

export default CardSimmerEffect;
