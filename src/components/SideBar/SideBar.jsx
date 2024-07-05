import React, { useState, useEffect, useRef } from 'react';
import './SideBar.css'; 
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuBtnChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`} >
    <div className="logo-details" onClick={menuBtnChange}>
  <img src="https://beta.acetek.edu.sg/wp-content/themes/acetek/assets/images/favicon.png" alt="ACETEK Icon" className="custom-icon object-cover ml-3 " onClick={menuBtnChange}/>
  <div className="logo_name">ACETEK</div>
  {/* <i className='bx bx-menu ' id="btn" onClick={menuBtnChange}></i> */}
</div>

      <ul className="nav-list">
        <li>
          <i className='bx bx-search'></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <Link to="/students">
            <i className='bx bx-grid-alt'></i>
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="/students">
            <i className='bx bx-group'></i>
            <span className="links_name">Students</span>
          </Link>
          <span className="tooltip">Students</span>
        </li>
        <li>
          <Link to="/attendance">
            <i className='bx bx-edit-alt'></i>
            <span className="links_name">Attendance</span>
          </Link>
          <span className="tooltip">Attendance</span>
        </li>
        <li>
          <Link to="/course">
            <i className='bx bx-book-open'></i>
            <span className="links_name">Course</span>
          </Link>
          <span className="tooltip">Course</span>
        </li>
  <Link to='/'>
        <li className="profile">
          
          <div className="profile-details">
            <i className='bx bx-export'></i>
            <div className="name_job">
              <div className="name">Logout</div>
            </div>
      
          </div>
      
          <i className='bx bx-log-out' id="log_out"> </i>
    
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
