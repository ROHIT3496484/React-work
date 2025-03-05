import React, { useEffect, useState } from 'react'


const Faqitemscomp = ({js, index}) => {
    const [isshow, setIsshow] =useState(false);

    useEffect(()=>{
        if(index == 0){
            setIsshow(true)
        }
    },[])

    const handle=(()=>{
        setIsshow((isshow)=> !isshow)
    })
  return (
    <div className='box'>
        <div className='que'>
            <button className='btn' onClick={handle}> + </button>
            <div> {js.question} </div>
        </div>
        <div className='ans'>
            {isshow && js.answer}
        </div>
    </div>
  )
}

export default Faqitemscomp
