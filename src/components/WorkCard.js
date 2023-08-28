import { NavLink } from 'react-router-dom';
import './WorkCardStyles.css';

import React from 'react';

const WorkCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={require('../assets/FrontEndWatchStoreSiteImg.png')} alt="Front-End-Watch-Store"/>
                <h2 className='project-title'>Front-End Watch store website</h2>
                <div className='pro-details'>
                    <p>Built a Front-End site for a Watch Store using HTML, CSS and ReactJS</p>
                    <div className='pro-btns'>
                        <NavLink to="https://watch-store.pages.dev/" className="btn">View</NavLink>
                        <NavLink to="https://github.com/Shriram03012003/watchStore" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard