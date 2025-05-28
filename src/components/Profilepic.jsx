import React from 'react'

function Profilepic() {

    const imageUrl='./src/assets/LOGO.jpg';
    const handleClick =(e) => e.target.style.display='none';

  return (
 <img onClick = {(e)=> handleClick(e)}  src={imageUrl} alt="profile-picture" width={150} height={150}/>  )
}

export default Profilepic