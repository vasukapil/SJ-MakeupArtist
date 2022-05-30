import React, { useState } from "react";
import "./Modal.css";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import { reposState } from "./state";
import { useNavigate } from "react-router-dom";




const Modal = ({data,toggleDrawer}) => {

console.log(data);
  const [look,setLook]=useState();
 
 
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

  console.log(look);

  return (
    
    <div className="Popup-Container">

{data &&
      
      <form onSubmit={handleSubmit(onSubmit)} className="Popup">
        <h3>BOOK APPOINTMENT</h3>
        <button id="close" onClick={toggleDrawer}>&times;</button>
        <div className="form-wrapper">
          <div className="form-One">
            <img src={data.image}></img>
            <h4 className="bgH4"></h4>
          </div>

          <div className="form-Two">
            <h4 className="smH4">{data.title}</h4>
            <form>
              <div className="block block1">
                <div className="Msing">
                  <label style={{marginRight:5}}>Event:</label>

                  {/* <select id="drop"
                    className="event"
                    onChange={(e) => {
                   
                      setLook(e.target.value);
                 
                      
                  
                    }}
                    
                    {...register("look", { required: true })}
                  >
                    <option value="1">Bridal Look</option>
                    <option value="2">Party Look</option>
                    <option value="3">Editorial</option>
                    <option value="4">Pre-wedding</option>
                  </select> */}
                  <input type="text" value={data.title} style={{textAlign:"center",height:'37px',width:'124px',backgroundColor:'#eee'}}>

                  </input>
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
                    
                  ></input>
                </div> */}
                <div className="Msing">
                  <label>Time:</label>

                  <input {...register("time", { required: true })} type="time" name="time"/>
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
                    <td className="checkcheck" style={{paddingLeft:"7px"}}>
                      <input
                        name="price"
                        {...register("price", { required: true })}
                        value={data.price.SJ[0]} 
                        type="radio"
                        className="radio2"
                      ></input>

                
                      <label>
                     
                        HD Makeup
                        <br />
                        INR {data.price.SJ[0]} 
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
                        INR {data.price.SJ[1]}
                    
                      </label>
                   
                    </td>
                  </tr>
                  <tr>


                  <th>Senior SJ</th>
                    
                    <td>
                      <input
                        name="price"
                        {...register("price", { required: true })}
                        value={data.price.Senior_SJ[0]}
                        type="radio"
                        className="radio2"
                      ></input>
                      <label>
                        HD Makeup
                        <br />
                        INR {data.price.Senior_SJ[0]}
                      </label>
                    </td>
                    <td>
                      <input
                        name="price"
                        {...register("price", { required: true })}
                        value={data.price. Senior_SJ[1]}
                        type="radio"
                        className="radio2"
                      ></input>
                      <label>
                        Airbrush Makeup
                        <br />
                        INR {data.price. Senior_SJ[1]}
                      </label>
                    </td>
                  </tr>
                  <tr>
                  <th>Junior SJ</th>
                  <td>
                      <input
                        name="price"
                        {...register("price", { required: true })}
                        value={data.price.Junior_SJ[0]}
                        type="radio"
                        className="radio2"
                      ></input>
                      <label>
                        HD Makeup
                        <br />
                        INR {data.price.Junior_SJ[0]}
                      </label>
                    </td>
                    
                 

                    <td>
                      <input
                        name="price"
                        {...register("price", { required: true })}
                        value={data.price.Junior_SJ[1]}
                        type="radio"
                        className="radio2"
                      ></input>
                      <label>
                        Airbrush Makeup
                        <br />
                        INR {data.price.Junior_SJ[1]}
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

              }   
                   
    </div>
              
  );
};

export default Modal;
