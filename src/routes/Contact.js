import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import CForm from '../components/CForm';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT" text="Let's have a chat"/>
      <CForm/>
      <Footer/>
    </div>
  )
}

export default Contact