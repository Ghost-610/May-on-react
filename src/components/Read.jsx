import React,{useState} from 'react'

function Read() {

const [name,setName]=useState("GHOST");
const [qauntity,setQuantity]=useState(1); 
const [comment,setComment]= useState();
const [payment,setPayment]= useState("Cash");
const [shipping,setShipping]= useState("Free");

function handleNameChange(event){
    setName(event.target.value);
}
function handleQuantityChange(event){
    setQuantity(event.target.value);
}
function handleCommentChange(event){
    setComment(event.target.value);
}
function handlePaymentChange(event){
    setPayment(event.target.value);}

function handleShippingChange(event){
    setShipping(event.target.value);
}
  return (
    <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Name:{name} </p>
        <br></br>
        <input type="nunber" value={qauntity} onChange={handleQuantityChange} />
        <p>Quantity: {qauntity} </p>
        <br></br>
        <textarea type="text" value={comment} onChange={handleCommentChange} placeholder='Type here.....'/>
        <p>Comment: {comment} </p>
        <br></br>
        <select value={payment} onChange={handlePaymentChange}>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="MasterCard">MasterCard</option>
            <option value="Net Banking">Net Banking</option>
        </select>   
        <p>
            Payment:{payment}
        </p>
        <br></br>
       <label>
        <input type="radio"value="Pick up"
        checked={shipping==="Pick up"}
         onChange={handleShippingChange}/>
        Pick up
        </label>
       <br></br>
    
       <label >
       <input type="radio"value="Delivery"
        checked={shipping==="Delivery"}
         onChange={handleShippingChange}/>
        Delivery
        </label>
        <p>Shipping-Method:{shipping}</p>
        <br></br>
        <br></br>
        <br></br>

    </div>
  )
}

export default Read

// this is how to use the usestate function and its features! 