import styled from '@emotion/styled'
import React, { useState } from 'react'
import './Form.css'

export const Form = () => {

    const Container=styled.div`
        width: 80vw;
        height:50vh;
        margin-left:60px;
        margin-top:60px;
        display:flex;
        justify-content:space-between;
       
 `
 const Formwrap=styled.div`
 
     width:60%;
 `
 const Payment=styled.div`

    height:50vh;
 
 `

  return (
      <>
    <Container>
        <div className="img-wrapper">
            <img src="./Images/Rectangle 98.png"></img>
            <h3>BRIDAL LOOK</h3>
        </div>

        <Formwrap>
        <form>
     <div class="form-row">
     <div class="form-group col-md-4">
      <label>Event:</label>
      <select class="form-select" aria-label="Disabled select example">
        <option selected>Bridal Look</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4">Password</label>
      <select class="form-select" aria-label="Disabled select example">
        <option selected>Select</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-4">
    <label for="inputAddress">Select Date</label>
    <select class="form-select" aria-label="Disabled select example">
        <option selected></option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
  </div>
  <div class="form-group col-md-4">
    <label for="inputAddress2">Select Time</label>
    <select class="form-select" aria-label="Disabled select example">
        <option selected>Select</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
  </div>
  </div>

    <div class="form-group col-md-8">
      <label for="inputCity">Location</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>

</form>
</Formwrap>
        

    </Container>

    <Payment>
     <div class="container">
  <form class="form-inline" role="form">
    <div class="form-group">
      <label class="control-label">Select Payment Option:</label>
    </div>
    <div class="form-group">
      <div class="radio">
        <label class="radio-inline control-label">
          <input type="radio" id="amount_25" name="amount" value="25" checked=""/>
            Advanced Booking
        </label>
      </div>
    </div>
    <div class="form-group">
      <div class="radio">
        <label class="radio-inline control-label">
          <input type="radio" id="amount_50" name="amount" value="50"/>
          Full Payment
        </label>
      </div>
    </div>
    <button type="button" class="btn btn-secondary col-md-8 btn-block">PROCEED TO BOOK</button>
    
  </form>
</div>

    </Payment>
    </>
  )
}
//<div class="form-group col-md-4">
// {/* <label for="inputState">State</label>
// <select id="inputState" class="form-control">
//   <option selected>Choose...</option>
//   <option>...</option>
// </select>
// </div>
// <div class="form-group col-md-2">
// <label for="inputZip">Zip</label>
// <input type="text" class="form-control" id="inputZip"/>
// </div> */}
