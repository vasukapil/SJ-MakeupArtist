import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { reposState } from "../Modal/state";
import { toast } from "react-toastify";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

function Index() {
  const [paBtn, setpaBtn] = React.useState(false);
  const [datta, setDatta] = React.useState();
  const [discription, setDiscription] = React.useState();
  const view = useRecoilValue(reposState);
  const navigate = useNavigate();
  // let discription ="";
  // const [product] = React.useState({
  //     name: "Dummy name",
  //     price: 399.00,
  //     description: "descriptionnnnn",
  //     bought:"one",
  //   });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setDatta(data);
    console.log(data);
    setpaBtn(true);
    setDiscription(`
        Email=${data.email},
        Name=${data.name},
        Phone Number=${data.phone},
        Artist=${view.artist},
        Location=${data.location},
        Date=${view.date},
        Time=${view.time},
        Paid=${view.paymentMeth},
        price=${view.price}
        `);
    console.log(discription);
    console.log(data);
  };
  async function handleToken(token, addresses) {
    console.log(discription);
    const product = {
      name: datta.name,
      price: view.price,
      description: discription,
    };
    const response = await axios.post(
      // https://pay-backend13.herokuapp.com/checkout
      "https://pay-backend13.herokuapp.com/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response);
    console.log("Response:", status);
    console.log( status === "success");

    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
      navigate("/congrats");
    console.log( status === "success");

    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
  return (
    <div className="mainConfirm">
      <h1>CONFIRM BOOKING</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="section1">
          <div className="block1">
            <img className="mainImg" src="./Images/Rectangle 98.png"></img>

            <div className="bridalCont">
              <span className="title">BRIDAL LOOK</span>
              <div className="info">
                {/* <div className="sing"><span>Event: </span><span>{view.location}</span></div>
            <div className="sing"><span>Artist:</span><span>{view.artist}</span></div> */}
                <div className="sing">
                  <span>Date:</span>
                  <span>{view.date}</span>
                </div>
                <div className="sing">
                  <span>Time:</span>
                  <span>{view.time}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="inputs">
            <div className="singg locSing">
              <span>Location:</span>
              <span>SJ Studio Dehradun</span>
            </div>
            <div className="Msing location">
              <label>Location:</label>
              <br></br>
              <select
                className="location"
                {...register("location", { required: true })}
              >
                <option value="one">Select</option>
                <option value="two">1</option>
                <option value="three">2</option>
              </select>
            </div>
            <div className="singg">
              <span>Name:</span>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter Name"
              />
            </div>
            <div className="singg">
              <span>Phone No:</span>
              <input
                type="text"
                {...register("phone", { required: true })}
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="singg">
              <span>Email:</span>
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="Enter Email"
              />
            </div>
          </div>
        </section>
        <section className="section2">
          <h2>PAYMENT DETAILS</h2>
          <div className="finalPayment">
            <div className="singgg">
              <span>Advance Booking Amount:</span>
              <span>{view.price}</span>
            </div>
            <div className="singgg underline">
              <span>GST :</span>
              <span>0</span>
            </div>
            <div className="singgg underline">
              <span>Total :</span>
              <span>{view.price}</span>
            </div>

            <div className="checkCont">
              <input
                type="checkbox"
                {...register("agreee", { required: true })}
              />{" "}
              <span>
                I agree to all the{" "}
                <span className="underline">TERMS AND CONDITIONS </span>
              </span>
            </div>
          </div>
        </section>
        {/* <span action={handleSubmit(onSubmit)} className="submitt">PROCEED TO PAYMENT</span> */}
        {!paBtn && (
          <input type="submit" className="submitt" value="PROCEED TO PAYMENT" />
        )}
      </form>
      {paBtn && (
        <StripeCheckout
          token={handleToken}
          stripeKey={process.env.REACT_APP_PUB_KEY}
          // billingAddress
          shippingAddress={false}
          amount={view.price * 100}
          // name={" name213132"}
          currency="INR"
          zipCode={false}
        >
          <div className="payyCont">
            <button className="payy btn btn-primary">Pay</button>
          </div>
        </StripeCheckout>
      )}
    </div>
  );
}

export default Index;
