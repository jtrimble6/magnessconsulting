import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../css/footer.css'

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBCol md='12'>
          <MDBRow>
            {/* <h5 className="title">Footer Content</h5> */}
            <h5 className='quote'>
              "He that thinketh he leadeth, and hath no one following, is only taking a walk."
            </h5>
          </MDBRow>
          <MDBRow>
            {/* <h5 className="title">Connect With Us</h5> */}
          </MDBRow>
          <MDBRow className='icons'>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fas fa-envelope-square"></i>
            <i className="fab fa-youtube-square"></i>
            <i className="fab fa-snapchat-square"></i>
            <i className="fab subscribe">Subscribe</i>
            {/* <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul> */}
          </MDBRow>
        </MDBCol>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> Dr.ShaneMagness.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;