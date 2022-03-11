import React from 'react';
import VinylContainer from './VinylContainer';

function Favorites({vinyls}){

    const  faveList = vinyls.slice(1,3)
    console.log(faveList)

    return (
        <div className='body--right'>
            <div>
                <VinylContainer vinyls={faveList} />           
            </div>
        </div>

    )
}

export default Favorites;