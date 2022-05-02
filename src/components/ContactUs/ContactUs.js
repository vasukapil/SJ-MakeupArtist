import React from 'react'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'
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
                <p className="under"><a href="tel:+91-9999963537">+91-9999963537</a></p>
                <p>Mon-Fri  8am - 8pm</p>
            </div>
            <div className="article1">
                <span>EMAIL US</span>
                <p className="under"><a href="mailto:junejasohni@gmail.com">junejasohni@gmail.com</a></p>
                <p>24*7</p>
            </div>
            <div className="article1">
                <span>WHATSAPP</span>
                <p className="under"><a href="whatsapp://send?phone=+91-9999963537">+91-9999963537</a></p>
                <p>Mon-Fri  8am - 8pm</p>
            </div>
            <div className="article1">
                <span className="sp3">BOOK APPOINTMENT</span>
                <p className="under"><a href="tel:+91-9999963537">+91-9999963537</a></p>
                <p>Mon-Fri  8am - 8pm</p>
            </div>
        </div>

        <div className="Address">
            <span>ADDRESS</span>
            <p> <a href="https://www.google.com/maps/place/Sohni+Juneja+Stylist+%26+Makeup+Artist/@28.5358654,77.2341558,17z/data=!4m5!3m4!1s0x390ce22a4983a363:0x574e60312de150d3!8m2!3d28.5358647!4d77.2363424"> R - 255, 2nd Floor, G K- 1, Delhi - 110048</a></p>
            <p> <a href="https://www.google.com/maps/place/Sohni+Juneja+Stylist+%26+Makeup+Artist/@28.5358654,77.2341558,17z/data=!4m5!3m4!1s0x390ce22a4983a363:0x574e60312de150d3!8m2!3d28.5358647!4d77.2363424"> 123, lane, opp. Sai Temple, Emerald Hills, Dehradun- 248001 </a></p>
        </div>

        <div className="FAQ">
                <FAQ/>
        </div>

        </div>

        <Footer/>
        </div>
  )
}

export default ContactUs