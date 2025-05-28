import React,{useState} from "react";

function Mycomponent() {

const[name, setName] = useState("Ghost");
const [age, setAge] = useState(0);
const [isEmployed, setEmployed]=useState(false);

const updatename = () => {
    setName("Elorm_Black");
  };
const increamentAge=()=>{
    setAge(age+2)
}
const toggleEmploymentStatus =()=>{
setEmployed(!isEmployed)
} 

  return(
    <div> 
        <p>Name:{name} </p>
        <button className="btn" onClick={updatename}> Set Name</button> .    
         <br></br> <br></br>
         <p>Age:{age} </p>
     <button className="btn" onClick={increamentAge}> Increament Age </button>

     <br></br> <br></br>
     <p>Is Employed:{isEmployed ? "YES": "NO"} </p>
     <button className="btn" onClick={toggleEmploymentStatus}> Employement Status </button>

    </div>
  )
}

export default Mycomponent;
