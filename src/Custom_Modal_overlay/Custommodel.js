import React, { useState } from 'react'
import './custommodel.css'
import Model from './Model';

const Custommodel = () => {
    const [isshow, setIsshow] = useState(false);
    const [offeraccept, setOfferaccept] = useState(false);

    const handlechange =()=>{
        setIsshow(true);
    }
    const handleclose =()=>{
        setIsshow(!isshow);
    }

    const handleoffer=()=>{
        setOfferaccept(true);
        setIsshow(!isshow);
    }

    return ( 
       <div>
        <div className = "first" >
         {!offeraccept &&   
        <button className = "showmebutton" onClick={handlechange} >show me </button> }

        {offeraccept && <p>offer Accepted</p>}
        </div> 
        <div>
            {isshow && <Model handleclose={handleclose} handleoffer={handleoffer}/>}
        </div>
        </div>
    )
}

export default Custommodel