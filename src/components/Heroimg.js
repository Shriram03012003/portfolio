import './HeroimgStyles.css';
import React from 'react'
import introImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className="hero">
        <div className='mask'>
            <img className='intro-img' alt="intro-bg" src={introImg} />
        </div>
        <div className='content'>
            <p>HI I'M SHRIRAM</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/projects" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg