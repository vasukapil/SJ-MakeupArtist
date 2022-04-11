import React from 'react'
import './Modal.css'

const Modal = () => {
  return (
      <div className="Popup-Container">
    <div className="Popup">
        <h3>BOOK APPOINTMENT</h3>
        <button id="close">&times;</button>
        <div className="form-wrapper">

            <div className="form-One">
                <img src="./Images/Rectangle 98.png"></img>
                <h4>BRIDAL LOOK</h4>
            </div>

            < div className="form-Two">
                <form>
                    <label>Event:</label>
                    <select className="event">
                    <option value="BridalLook">Bridal Look</option>
                    <option value="saab">1</option>
                    <option value="opel">2</option>
                    <option value="audi">3</option>
                  </select>

                  <label>Artist:</label>
                    <select className="artist">
                    <option value="one">Select</option>
                    <option value="two">1</option>
                    <option value="three">2</option>
                  </select>

                  <label for="start">Select date:</label>

                  <input type="date" id="start" name="trip-start"
                    value="YYYY-MM-DD"
                   min="2022-01-01" max="2026-12-31"></input>

                   <br></br>

                   <label>Location:</label>
                   <br></br>
                    <select className="location">
                    <option value="one">Select</option>
                    <option value="two">1</option>
                    <option value="three">2</option>
                  </select>
                </form>


            </div>

           
        </div>

        <div className="Outside">
                <form>
                <span className="span1">Select Payment Option:</span>
                <input type="radio" className="radio1" checked></input>
                <label for="html">Advance Booking</label>
                <span className="span2">*Pay xxxx amount now and pay remaining on the day of appointment.</span>
                <input type="radio" className="radio2"></input>
                <label for="html">Advance Booking</label>
                <span className="span3">*Pay full amount to confirm appointment.</span>

                <button className="btn-lg">PROCEED TO BOOK</button>

                </form>

            </div>
    </div>
    </div>
  )
}

export default Modal