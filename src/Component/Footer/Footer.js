import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../Footer/Footer.css";

export default function Footer() {
  return (
    <div className="footer1">
      <MDBFooter
        className="text-center text-lg-start text-muted"
        color="white"
        bgColor="dark"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  ArchLab.
                </h6>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Community</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Projects
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Team
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Reviews
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQs
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
            
                <p>
                  <a href="#!" className="text-reset">
                    Our Story
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Meet the team
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Careers
                  </a>
                </p>
              </MDBCol>


              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company</h6>
            
                <p>
                  <a href="#!" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Press
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Careers
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  info@example.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright
        
        </div>
      </MDBFooter>
    </div>
  );
}

/*<div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>*/
