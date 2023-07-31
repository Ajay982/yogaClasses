import React from 'react'
import ContactCard from "./ContactCard";
import '../css/About.css'


const About = () => {
  return (
    <div className='about'>
      <img className='aboutImage' src="https://static.wixstatic.com/media/724acb_f3d0d3bb739d44f5a91b0e03772cebbb~mv2_d_2678_1657_s_2.jpg/v1/fill/w_640,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/724acb_f3d0d3bb739d44f5a91b0e03772cebbb~mv2_d_2678_1657_s_2.jpg" alt="" />
        <div className='aboutContent'>
     <h1>About 3rd Eye Wellnes, Yoga Centre</h1>
     <hr className='hr' />
        <p>
            The 3rd Eye Wellness, Yoga and Cultural Centre, was set up in January 2021, to promote the rich heritage of Indian Art, Culture and Yoga. <br /><br />

            The centre is one of the leading Yoga Schools in Bangalore, known for its Holistic and Integrated Yoga Classes and Programs, Classical Pranayama and Meditation classes , and AntiGravity Fitness* , which is conducted daily at the Centre. <br /><br />

            The internationally renowned Krishnamacharya Yoga Mandiram (KYM) Yoga Teacher Training Certification Course is conducted exclusively at the centre in Bangalore. Late Shri T. Krishnamacharya, often called the Father of Modern Yoga and was the master and teacher to other great Yoga teachers such as Shri BKS Iyengar, Shri TKV Desikachar, and Madame Indra Devi. <br /><br />

            Several other programs such as Classical Dance classes, Bhajans, Kirtans, Music and Dance Concerts, Shastra Classes and lectures, are also hosted at the Centre.<br /><br />
         </p>
         </div>
         <ContactCard isHorizontal />
    </div>
  )
}

export default About
