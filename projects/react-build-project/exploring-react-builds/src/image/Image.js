import React from 'react';
import './Image.css';
import mushLadies from './mushLadies.jpg';

console.log(mushLadies);

const Image = () => {
    return (
        <div>
            <img src={mushLadies} alt='Mush Ladies' />
            <div className='mush'></div>
        </div>
    );
}


export default Image;