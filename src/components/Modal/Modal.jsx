import React from "react";
import "./Modal.css";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import { reposState } from "./state";
import { useNavigate } from "react-router-dom";

const Modal = ({toggleDrawer}) => {
  const [info, setInfo] = useRecoilState(reposState);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setInfo(data);
    console.log(data);
    navigate("/checkout");
  };

  return (
    <div className="Popup-Container">
      <form onSubmit={handleSubmit(onSubmit)} className="Popup">
        <h3>BOOK APPOINTMENT</h3>
        <button id="close" onClick={toggleDrawer}>&times;</button>
        <div className="form-wrapper">
          <div className="form-One">
            <img src="./Images/Rectangle 98.png"></img>
            <h4 className="bgH4">BRIDAL LOOK</h4>
          </div>

          <div className="form-Two">
            <h4 className="smH4">BRIDAL LOOK</h4>
            <form>
              <div className="block block1">
                <div className="Msing">
                  <label>Event:</label>

                  <select
                    className="event"
                    {...register("look", { required: true })}
                  >
                    <option value="BridalLook">Bridal Look</option>
                    <option value="saab">1</option>
                    <option value="opel">2</option>
                    <option value="audi">3</option>
                  </select>
                </div>
                <div className="Msing ">
                  <label for="start">Date:</label>

                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    placeholder="YYYY-MM-DD"
                    min="2022-01-01"
                    max="2026-12-31"
                    {...register("date", { required: true })}
                  />
                </div>
                {/* <div className="Msing">
                  <label for="time">Time:</label>
                  <input
                    type="time"
                    id="start"
                    name="time"
                    placeholder="Time"
                    min="09:00"
                    max="18:00"
                    step="3600"
                    {...register("time", { required: true })}
                  ></input>
                </div> */}
                <div className="Msing">
                  <label>Time:</label>

                  <select
                    className="event"
                    {...register("time", { required: true })}
                    placeholder="Time"
                  >
                    <option value="2">2</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                {/* <div className="Msing">
                  <label>Artist:</label>
                  <select
                    className="artist"
                    {...register("artist", { required: true })}
                  >
                    <option value="one">Select</option>
                    <option value="two">1</option>
                    <option value="three">2</option>
                  </select>
                </div> */}
              </div>
              {/* block block2 */}
              <div className="">
                <h4>SELECT ARTIST</h4>
                <table>
                  <tr>
                    <th>Sohni Juneja</th>
                    <td style={{paddingLeft:"7px"}}>
                      <input
                        name="price"
                        {...register("price", { required: true })}
                        value="38000"
                        type="radio"
                        className="radio2"
                      ></input>
                      <label>
                        HD Makeup
                        <br />
                        (INR 38000)
                      </label>
                    </td>
                    <td>
                      <input
                        name="price"
                        {...register("price", { required: true })}
                        value="43000"
                        type="radio"
                        className="radio2"
                      ></input>
                      <label>
                        Airbrush Makeup
                        <br />
                        (INR 43000)
                      </label>
                    </td>
                  </tr>
                  <tr>
                  <th>Senior SJ</th>
                    
                    <td>
                      <input
                        name="price"
                        {...register("price", { required: true })}
                        value="28000"
                        type="radio"
                        className="radio2"
                      ></input>
                      <label>
                        HD Makeup
                        <br />
                        (INR 28000)
                      </label>
                    </td>
                    <td>
                      <input
                        name="price"
                        {...register("price", { required: true })}
                        value="33000"
                        type="radio"
                        className="radio2"
                      ></input>
                      <label>
                        Airbrush Makeup
                        <br />
                        (INR 33000)
                      </label>
                    </td>
                  </tr>
                  <tr>
                  <th>Junior SJ</th>
                  <td>
                      <input
                        name="price"
                        {...register("price", { required: true })}
                        value="18000"
                        type="radio"
                        className="radio2"
                      ></input>
                      <label>
                        HD Makeup
                        <br />
                        (INR 18000)
                      </label>
                    </td>
                    
                 

                    <td>
                      <input
                        name="price"
                        {...register("price", { required: true })}
                        value="23000"
                        type="radio"
                        className="radio2"
                      ></input>
                      <label>
                        Airbrush Makeup
                        <br />
                        (INR 23000)
                      </label>
                    </td>
                  </tr>
                </table>
              </div>
    
            </form>
          </div>
        </div>

        <div className="Outside">
          <div className="radioCont">
            <span className="span1">Select Payment Option:</span>
            <div className="Msingg">
              <input
                name="paymentMeth"
                {...register("paymentMeth", { required: true })}
                value="half"
                type="radio"
                className="radio1"
                checked
              ></input>
              <label for="html">Advance Booking</label>
              <span className="span2">
                *Pay xxxx amount now and pay remaining on the day of
                appointment.
              </span>
            </div>
            <div className="Msingg">
              <input
                name="paymentMeth"
                {...register("paymentMeth", { required: true })}
                value="full"
                type="radio"
                className="radio2"
              ></input>
              <label for="html">Advance Booking</label>
              <span className="span3">
                *Pay full amount to confirm appointment.
              </span>
            </div>
          </div>
          <button type="submit" className="btn-lg">
            PROCEED TO BOOK
          </button>
        </div>
      <div className="infoss">
        <h5>Contact Us</h5>
        <div className="sing"><img src="/Images/phone.png" alt="" /><a href="tel:+91-9999963537">+91-9999963537</a></div>
        <div className="sing"><img src="/Images/whatsapp_grey.png" alt="" /><a href="whatsapp://send?phone=+91-9999963537">+91-9999963537</a></div>
        <div className="sing"><img src="/Images/mail.png" alt="" /><a href="mailto:junejasohni@gmail.com">junejasohni@gmail.com</a></div>
      </div>
      </form>
    </div>
  );
};

export default Modal;
