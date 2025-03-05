import React, { useState, useEffect } from 'react'
import './shopping.css'

const Shopping = () => {
    const [food, setFood] = useState("");
    const [fetchfood, setFetchfood] = useState([]);
    const [listed, setListed] = useState([]);

    const fetchdata =async()=>{
        const Response = await fetch(`https://dummyjson.com/recipes/search?q=${food}`)
        const data = await Response.json();
        setFetchfood(data?.recipes || []);;
        console.log(data);
    }
    useEffect(()=>{
        if(food.length >=2){
            fetchdata();
        }
        
    },[food])

    const addval=(items)=>{
        setListed((prev)=>([...prev, items]));
    }
    const remval=(item)=>{
        setListed((oldvalue) =>
            oldvalue.filter(val => val !== item) 
        );
    }
  return (
    <div className='main'>
        <h1>Shopping-List</h1>
        <br/>
      <div>
        <input className='input' value= {food} type="text" onChange={(e)=>setFood(e.target.value)}></input>
      </div>
      <div className="outshop">
        {
            fetchfood.map((mp) =>{
                return <li className="product"key={mp.id}>
                    <button onClick={()=>addval(mp.name)}>Y</button>
                    {mp.name}
                </li>
            })
        }
      </div>
      <div>SelectedList</div>
      <div className="outshop">
        {
            listed.map((mp) =>{
                return <li className="product" > <input type='checkbox'/>
                    {mp}
                    <button onClick={()=>remval(mp)}>N</button>
                </li>
            })
        }
      </div>
    </div>
  )
}

export default Shopping
