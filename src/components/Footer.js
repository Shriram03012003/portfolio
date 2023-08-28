import './FooterStyles.css';

import React from 'react';

import{FaPhone,FaMailBulk,FaGithub} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

// import{DiGithubFull} from 'react-icons/di';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='phone'>
                <h4>
                <FaPhone size={20} styles={{ color: "#fff", marginRight: "2rem" }} className='footer-icon'/>
                +91 9543123123
                </h4>
                </div>
                <div className='email'>
                <h4>
                <FaMailBulk size={20} styles={{ color: "#fff", marginRight: "2rem" }} className='footer-icon'/>
                shriram03012003@gmail.com
                </h4>
                </div>
                <NavLink to="https://github.com/Shriram03012003/">
                <div className='github'>
                <h4>
                <FaGithub size={20} styles={{ color: "#fff", marginRight: "2rem" }} className='footer-icon'/>
                shriram03012003
                </h4>
                </div>
                </NavLink>
            </div>
            <div className='right'>
                <h4>My Ideology</h4>
                <p>If something makes you happy.
                <br/> It doesn't have to make sense to anyone else.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer