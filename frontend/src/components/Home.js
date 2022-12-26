import React, { useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCardTitle,

}
from 'mdb-react-ui-kit';
import HomeNavbar from "./RNavbar";

import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    useEffect(()=>{
        let tokens = localStorage.getItem("token")
    console.log("tokens")
    if(!tokens){
        navigate("/login")
    }
    })
    
  return (
    
    <>
    <HomeNavbar/>
    
    <div class="col d-flex justify-content-center" style={{height: "90vh",
        width: "100vw",
      "backgroundColor":"#c5d299", paddingTop:"90px"}}>

      <MDBCard style={{ maxHeight: '390px', maxWidth: '900px'}}>
        <MDBRow className='g-0'>

          <MDBCol md='8'>
          <MDBCardImage src={require('./static/hompage.jpg')} fluid />
          </MDBCol>

          <MDBCol md='4'>
          <MDBCardBody>
          <MDBCardImage src={require('./static/bvrit-logo.jpg')} fluid />
            <MDBCardTitle style={{"fontSize":"px100"}}>Research Publications Search Engine</MDBCardTitle>

          </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </div>
    </>
    
  );
}

export default Home;