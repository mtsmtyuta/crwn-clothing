import React from 'react';

import './collection-item.style.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div 
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}>
        </div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);

export default CollectionItem;

// note: there was a typo in collection-item class, I lost good one hour thanks to that !!!
// I checked if the file was read, then disect the exception. should've suspect typo as soon as I knew the file was read