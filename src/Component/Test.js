import React from 'react';
import {useOvermind} from "../Overmind";

const Test = () => {
    const {state,actions} = useOvermind()

    const updateValue = ()=>{
        actions.setValue({
            value:2
        })
    }
    return (
        <div align="center">
            <button  onClick={()=>updateValue()}>
                {state.text}
            </button>
            <p>
                {state.value}
            </p>
        </div>
    );
};

export default Test;