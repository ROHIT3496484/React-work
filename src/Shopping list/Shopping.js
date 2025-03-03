import React, { useState, useEffect } from 'react'
import './shopping.css'

const Shopping = () => {
    const [food, setFood] = useState("");
    const [fetchfood, setFetchfood] = useState([]);

    const fetchdata =async()=>{
        const Response = await fetch(`https://dummyjson.com/recipes/search?q=${food}`)
        const data = await Response.json();
        setFetchfood(data?.recipes || []);;
        console.log(data);
    }
    useEffect((e)=>{
        if(food.length >=2){
            fetchdata(food);
        }
        
    },[food])

  return (
    <div className='main'>
        <h1>Shopping-List</h1>
        <br/>
      <div>
        <input className='input' value= {food} type="text" onChange={(e)=>setFood(e.target.value)}></input>
      </div>
      <div>
        {
            fetchfood.map((mp) =>{
                return <span key={mp.id}>
                    {mp.name}
                </span>
            })
        }
      </div>
    </div>
  )
}

export default Shopping
