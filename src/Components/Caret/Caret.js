import React from 'react';
import { ReactComponent as CaretImage } from './caret-down.svg'
//takes in a prop called direction
function Caret(props){
    let scrollNext = () => {
        window.scroll(0, window.innerHeight*((props.direction==="up")?-1:1));
    }
    return(
        <CaretImage className="caret" style={(props.direction==="up")?{transform: "rotate(180deg)"}:{}} onClick={scrollNext} />
    );

}

export default Caret;