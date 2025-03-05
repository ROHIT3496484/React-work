import React, { useState, useEffect } from "react";
import './Faq.css'

const Faqitems=({faq, index})=>{
    const [isshow, setIsshow]= useState(false);

    useEffect(()=>{
        if(index == 0){
            setIsshow(true);
        }
    }, [])

    const handleonclick=()=>{
        setIsshow((isshow)=> !isshow);
    }

    return(
        <div className="class-box">
          <div className="que">
                <button className="btn" onClick={handleonclick}>+</button>
                <div>{faq.question}</div>
           </div>
           <div className="ans"> {isshow && faq.answer} </div>
        </div>
    );
};

export default Faqitems;