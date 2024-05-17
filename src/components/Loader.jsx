import React from 'react';
import loader from './../assets/newLoader.gif';

const Loader = () => {
    return (
        <div className='loader-container' >
            <img src={loader} alt="" className='img-fluid z-nl' />
        </div>
    )
}

export default Loader
// 