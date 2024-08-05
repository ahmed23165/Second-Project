import React from 'react';
import pic6 from '../Asset/pic6.webp';
import pic5 from '../Asset/pic5.webp';
import pic8 from '../Asset/pic8.webp';
import { TiTick } from "react-icons/ti";
import '../Card/Card.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Card() {
  return (
    <div style={{textAlign: 'center', paddingTop: '5rem'}}>

        <p style={{color: 'green'}}>PRICING</p>
        <h1>Price & Plane</h1>
    <div className='card4'>
    <div className='card1'>
    <MDBCard>
      <MDBCardImage src={pic6} position='top' alt='...' />
      <MDBCardBody>
        
        <MDBCardText>
          <p><TiTick /> Planning Solution</p>
          <p><TiTick /> 10 Construction Drawings</p>
          <p><TiTick /> Selection Materials</p>
          <p><TiTick /> Unlimited Revision</p>
          <h4>88$ /mon</h4>
        </MDBCardText>
        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-success">GET STARTED</button>
      </MDBCardBody>
    </MDBCard>
    </div>
     <div className='card2'>
     <MDBCard>
       <MDBCardImage src={pic5} position='top' alt='...' />
       <MDBCardBody>

         <MDBCardText>
         <p><TiTick /> Planning Solution</p>
          <p><TiTick /> 10 Construction Drawings</p>
          <p><TiTick /> Selection Materials</p>
          <p><TiTick /> Unlimited Revision</p>
          <h4>85$ /mon</h4>
         </MDBCardText>
         <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-success">GET STARTED</button>
       </MDBCardBody>
     </MDBCard>
     </div>
     
     <div className='card3'>
    <MDBCard>
      <MDBCardImage src={pic6} position='top' alt='...' />
      <MDBCardBody>
        
        <MDBCardText>
        <p><TiTick /> Planning Solution</p>
          <p><TiTick /> 10 Construction Drawings</p>
          <p><TiTick /> Selection Materials</p>
          <p><TiTick /> Unlimited Revision</p>
          <h4>78$ /mon</h4>
        </MDBCardText>
        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-success">GET STARTED</button>
      </MDBCardBody>
    </MDBCard>
    </div>
</div>
</div>
  );
}