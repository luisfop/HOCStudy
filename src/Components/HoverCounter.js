import React from  'react';

import WithCounter from '../HOC/WithCounter';


const HoverCounter = ({ counter , incrementCounter, name, nameHandler }) => {

    

    return(
        <div>
            <p onMouseOver={incrementCounter}>Hover Component</p>
            <h3>Hover me!! {counter}</h3>

                        

            <p onClick={nameHandler}>{name}</p>
            
        </div>

    )
}

export default WithCounter(HoverCounter);