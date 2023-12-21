import React, { useState } from 'react';

const SideBar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div>
      <ul className="side-menu top">
        <li className={activeItem === 'Dashboard' ? 'active' : null} onClick={() => handleItemClick('Dashboard')}>
          <a href="#">
            <i className='bx bxs-dashboard'></i>
            <span className="text">Dashboard</span>
          </a>
        </li>
        <li className={activeItem === 'My Store' ? 'active' : null} onClick={() => handleItemClick('My Store')}>
          <a href="#">
            <i className='bx bxs-shopping-bag-alt'></i>
            <span className="text">My Store</span>
          </a>
        </li>
        <li className={activeItem === 'Analytics' ? 'active' : null} onClick={() => handleItemClick('Analytics')}>
          <a href="#">
            <i className='bx bxs-doughnut-chart'></i>
            <span className="text">Analytics</span>
          </a>
        </li>
        <li className={activeItem === 'Message' ? 'active' : null} onClick={() => handleItemClick('Message')}>
          <a href="#">
            <i className='bx bxs-message-dots'></i>
            <span className="text">Message</span>
          </a>
        </li>
        <li className={activeItem === 'Team' ? 'active' : null} onClick={() => handleItemClick('Team')}>
          <a href="#">
            <i className='bx bxs-group'></i>
            <span className="text">Team</span>
          </a>
        </li>
      </ul>
        <ul className="side-menu">
          <li>
            <a href="#">
              <i className='bx bxs-cog' ></i>
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className='bx bxs-log-out-circle' ></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
    </div>
  )
}

export default SideBar
