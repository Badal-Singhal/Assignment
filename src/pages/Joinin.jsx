import React from "react";
import { Button } from "rsuite";

export default function Joinin() {
  return (
    <div class="signin-container">
      <button class="signin-button google">
        <img src="./Google.png" alt="Google Icon" />
        Continue with Google
      </button>
      <button class="signin-button facebook">
        <img src="./Facebook.png" alt="Facebook Icon" />
        Continue with Facebook
      </button>
      <div class="line">
        <div class="horizontal-line"></div>
        <div class="or-connect-with">Or connect with</div>
        <div class="horizontal-line"></div>
      </div>
      <div className="email-password-container">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          color: "#6D747A",
          fontSize: "10px",
        }}
      >
        <p>Password strength</p>
      </div>
      <div>
        <p id="abc">
          By continuing, you agree to our <b>Terms of Service</b> and{" "}
          <b>Privacy Policy</b>.
        </p>
      </div>
      <Button
        style={{
          color: "white",
          fontSize: "14px",
          lineHeight:"16px",
          backgroundColor:"#8064A2",
          margin:"8px",
          height:"40px"
        }}
        appearance="primary"
        block
      >
        Agree and Continue
      </Button>
    </div>
  );
}
