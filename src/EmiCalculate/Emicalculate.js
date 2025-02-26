import React, { useEffect, useState } from 'react'

const Emicalculate = () => {
    const [amt, setAmt] = useState(0);
    const [per, setPer] = useState(0);
    const [time, setTime] = useState(0);
    const [EMI, setEMI] = useState(0);

    // P(r(1+r)^n/((1+r)^n)-1))
    useEffect(()=>{
        calculate();
    },[amt, per, time])
    // using useeffect if there in any change in any value that will work

    const calculate=((e)=>{
        let r = per;
        if( amt && r && time){
            r = r / 12 / 100;
            const calcPow = Math.pow ( 1+ r, time * 12);
            const amoun = amt * (( r * calcPow) / (calcPow - 1 ));
            setEMI(Math.round(amoun));
        }

    })

  return (
    <div className='box'>
        <h1>Mortage Calculator</h1>
        <div>
        <h3>principle Loan Amount</h3>
        <input className='principle' placeholder='amount'          
        type='number' id='amt' onChange={(e) => setAmt(e.target.value)}></input>

        </div>
        <div>
        <h3>Interest Rate</h3>
        <input className='interest' placeholder='Percent' type='%' id='per'onChange={(e)=> setPer(e.target.value)}></input>

        </div>
        <div>
        <h3>Length of Loan</h3>
        <input className='length' placeholder='Time' type='number' id='time' onChange={(e)=> setTime(e.target.value)}></input>

        </div>
        <div>
        <p>Your EMI is {EMI}</p>
        </div>
        
    </div>
  )
}

export default Emicalculate
