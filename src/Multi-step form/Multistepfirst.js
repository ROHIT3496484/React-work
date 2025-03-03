import React, {useState} from "react";

const Multistepfirst =()=>{
    const data = [
        { id : "Name", label : "Name", inputType : "text", button : "Next", Placeholder : "Your Name.."},
        { id : "Email", label : "Email", inputType : "Email", button : "Next",Placeholder : "Your Email "},
        { id : "DOB", label : "DOB", inputType : "Date", button : "Next", Placeholder : "Your DOB.." },
        {  id : "Password", label : "Password", inputType : "password", button : "Submit", Placeholder : "Your Pasword.."},
    ];
    
    const [forms, setForms] = useState(data);
    const [index, setIndex] = useState(0);
    const [formsdata, setFormsdata] = useState({
                Name : '',
                Email : '',
                DOB : '',
                Password : ''
            })
    const [sucess, setSucess] = useState(false);

    const handlenext=(e)=>{
        e.preventDefault();
        if (index < forms.length - 1) {
          setIndex((idx) => idx + 1);
        } else {
          console.log("Form submitted")
          setSucess(true);
    }
}
    const handleback=(e)=>{
        e.preventDefault();
        if(index> 0){
        setIndex( (idx)=> idx-1);
        }   
    }

    const handlechang=(e)=>{
        const id=e.target.id;
        const val= e.target.value;
        const copydata ={...formsdata};
        copydata[id] =val;
        setFormsdata(copydata);
        console.log('formsdata->', formsdata);
    }

    return(
        <div>
            
           <h1 className="multi">Multi-Step Form</h1>
          
            
         { !sucess ? <form>
                {index > 0 && (
          <button type="button" onClick={handleback}>Back</button>
        )}
                <br/>
                
                <label>{forms[index].label}</label>
                <br/>
                <input value = {formsdata[forms[index].id]} id={[forms[index].id]} onChange={handlechang} placeholder={forms[index].Placeholder} type={forms[index].inputType}/>
                <br/>
                <button onClick={handlenext}>{forms[index].button}</button>
            </form>
    
            :
        
                <div>
                    <h1>SUccess</h1>
                    <hr/>
                    <span> Name: {formsdata.Name}</span>
                </div>
            
}
            
        </div>
    )
};

export default Multistepfirst;