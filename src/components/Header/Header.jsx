import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our meal will satisfy your carving and elevate your dining experience, one delicious meal at a time.</p>
        {/* we have copied header image from assets and pasted in public folder*/}
        <button>View Menu</button>   
      </div>
    </div>
  )
}

export default Header
