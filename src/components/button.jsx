import React from 'react'

function button() {
    // this is about event handling and clicks the 1st one is without a name but the 2nd one has a name
// sending an argument to a function 
const handleClick = (e) => e.target.textContent = 'Ouch, Once is ENOUGH !!';
 
return (
  <button className='btn' onDoubleClick={(e) => handleClick(e)}>Click Me !!</button>
);
}

export default button

