import React from  'react';
import WithCounter from '../HOC/WithCounter';

const ClickCounter = (props) => {
    

    const { counter , incrementCounter, name , nameHandler} = props


    return(
        <div>
            <p>Click Component</p>
            <h1>{counter}</h1>
            <button onClick={incrementCounter}>Add</button>
            
            <br/>

            {name}

            <button onClick={nameHandler}>Change Name</button>
            <hr/>
        </div>

    )
}

export default WithCounter(ClickCounter);