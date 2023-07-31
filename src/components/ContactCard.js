import React from 'react'
import { ImMobile2 } from "react-icons/im";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TfiMapAlt } from "react-icons/tfi";
import '../css/ContactCard.css'

const cards = [
    {icon: ImMobile2, heading: "Call", subHeading: "9991010100/97987979097" },
    {icon: HiOutlineMailOpen, heading: "Mail", subHeading: "@mail.inbox@info" },
    {icon: TfiMapAlt, heading: "Address", subHeading: <><span>117,Kolar Gold Road</span><br /><span>near zen G, opposite Axis Bank</span></> }
]
   

const ContactCard = ({isHorizontal = false}) => {
  return (
      <div id='getInTouch'>
            <h1>Get in Touch</h1>
            <hr className='hr' /> 
            <div className={`container ${isHorizontal ? '' : 'column'}`}>
           
            {cards.map(Card)}
    
            </div>
         </div>
  )
}


export default ContactCard

const Card = ({icon:Icon,heading,subHeading },index) =>
            <>
            <div>
                <Icon className='contactIcon' />
                <h2>{heading}</h2>
                <span>{subHeading}</span>
            </div>
            {cards.length-1 !== index && <hr className='height60' />}
            
            </>


