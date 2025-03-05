import React, { useEffect, useState } from "react";
const Autocompletesearch = () => {
  const [searchval, setSearchval] = useState('');
  const [fetchedval, setFetchedval] = useState([]);

  const fetchval=async()=>{
    try{
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${searchval}`);
      const data = await response.json();
      setFetchedval(data?.recipes || []);
    }
    catch(error){
      console.error("You got this error:",error)
    }
  }

  useEffect(()=>{
    if(searchval.length >= 2){
      fetchval();
    }
    else{
      setFetchedval([]);
    }
  },[searchval])


  return (
    <div>
      <div>
        <h1>Autocompletesearch</h1>
      </div>
      <div><input className="input" onChange={(e)=>setSearchval(e.target.value)}></input></div>
      <div className="output">{
        fetchedval.length > 0  ? (
          fetchedval.map((mp, index)=>(
            <span key={index}>{mp.name}</span>
          ))

        ):
        (searchval.length >= 2 && <p>No Result Found</p>)
        }</div>
    </div>
  );
};
export default Autocompletesearch;
