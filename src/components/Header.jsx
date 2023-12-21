import React from 'react'
import userImage from'../images/userimage.png'

const Header = ({toggleclass}) => {
  return (
    <div>
       <nav>
          <i  className='bx bx-menu'  onClick={toggleclass}  ></i>
          <a href="#" className="nav-link">Categories</a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="button" className="search-btn"><i className='bx bx-search' ></i></button>
            </div>
          </form>
          <a href="#" className="notification">
            <i className='bx bxs-bell' ></i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src={userImage} />
          </a>
        </nav>
      
    </div>
  )
}

export default Header
