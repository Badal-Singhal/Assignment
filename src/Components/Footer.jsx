import React from "react";

export default function Footer() {
  return (
    <div className="footer-box">
      <div>
        <ul className="listbody">
          <lh className="footer-list">
            <b>HobbyCue</b>
          </lh>
          <li className="footer-list">About us</li>
          <li className="footer-list">Our services</li>
          <li className="footer-list">Work With Us</li>
          <li className="footer-list">FAQ</li>
          <li className="footer-list">Contact us</li>
        </ul>
      </div>
      <div>
        <ul className="listbody">
          <lh className="footer-list">
            <b>How Do I</b>
          </lh>
          <li className="footer-list">Sign up</li>
          <li className="footer-list">Add a Listing</li>
          <li className="footer-list">Claim Listing</li>
          <li className="footer-list">Post A Query</li>
          <li className="footer-list">Add A Blog Post</li>
          <li className="footer-list">Other Queries</li>
        </ul>
      </div>
      <div>
        <ul className="listbody">
          <lh className="footer-list">
            <b>Quick Links</b>
          </lh>
          <li className="footer-list">Listing</li>
          <li className="footer-list">Blog Post</li>
          <li className="footer-list">Shop/Store</li>
          <li className="footer-list">Community</li>
        </ul>
      </div>
      <div>
        <ul className="listbody">
          <li className="footer-list">
            <b>Social Media</b>
          </li>
          <li>
            <div className="social">
              <div>
                <a>
                  <img src="./1.png" alt="logo" />
                </a>
              </div>
              <div>
                <a>
                  <img src="./2.png" alt="logo" />
                </a>
              </div>
              <div>
                <a>
                  <img src="./3.png" alt="logo" />
                </a>
              </div>
              <div>
                <a>
                  <img src="./4.png" alt="logo" />
                </a>
              </div>
              <div>
                <a>
                  <img src="./5.png" alt="logo" />
                </a>
              </div>
              <div>
                <a>
                  <img src="./6.png" alt="logo" />
                </a>
              </div>
              <div>
                <a>
                  <img src="./7.png" alt="logo" />
                </a>
              </div>
              <div>
                <a>
                  <img src="./8.png" alt="logo" />
                </a>
              </div>
            </div>
          </li>
          <li style={{ marginTop: "50px" }} className="footer-list">
            <b>Invite Friends</b>
          </li>
          <li>
            <div className="search">
              <div>
                <input
                  type="text"
                  className="search-box"
                  placeholder="Email ID"
                />
              </div>

              <div className="search-icon-container" style={{ color: "white", width:"100px" }}>
                Invite
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
