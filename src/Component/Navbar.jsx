import React from 'react'
const Navbar = () => {
  return (
    <>
       <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/price">Price</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar