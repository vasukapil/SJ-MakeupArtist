import React from 'react'
import FAQ from '../FAQ/FAQ'
import Navbar from '../Navbar/Navbar'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className="Contact-Container">
        <Navbar/>
        <div className="ContactUs">
        <h2>Contact Us</h2>
        <div className="p-wrapper">
        <p className="pOne">Welcome to the contact page of Sohni Juneja</p>
        <p className="pTwo">Find out  everything related to our policies and FAQs</p>
        <p className="pThree">Book an appointment through the contact details provided below.</p>
        </div>
        <div className="Contact-info">
            <div className="article1">
                <span>CALL US</span>
                <p>+91-9999963537</p>
                <p>Mon-Fri  8am - 8pm</p>
            </div>
            <div className="article1">
                <span>EMAIL US</span>
                <p>junejasohni@gmail.com</p>
                <p>24*7</p>
            </div>
            <div className="article1">
                <span>WHATSAPP</span>
                <p>+91-9999963537</p>
                <p>Mon-Fri  8am - 8pm</p>
            </div>
            <div className="article1">
                <span>BOOK APPOINTMENT</span>
                <p>+91-9999963537</p>
                <p>Mon-Fri  8am - 8pm</p>
            </div>
        </div>

        <div className="Address">
            <span>ADDRESS</span>
            <p>R - 255, 2nd Floor, G K- 1, Delhi - 110048</p>
            <p>123, lane, opp. Sai Temple, Emerald Hills, Dehradun- 248001</p>
        </div>

        <div className="FAQ">
                <FAQ/>
        </div>

        </div>
        </div>
  )
}

export default ContactUs