import { Link } from 'react-router-dom';
import './AboutContent.css';

import React from 'react';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I ?</h1>
            <p>Im a React Front-End developer. I just started my development journey.</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={require('../assets/my-img.jpg')} alt="true" className='img'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={require('../assets/reactjsImg.jpg')} alt="true" className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent