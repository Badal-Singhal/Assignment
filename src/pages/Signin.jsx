import React from "react";
import { Button } from "rsuite";

export default function Signin() {
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
      <div className="Forgot">
        <div>
          <label>
            <input id="cb" type="checkbox" aria-label="Remember me" />
            Remember Me
          </label>
        </div>
        <div>
          <img src="./lock.png" alt="logo"/>
          <a style={{color:"black" }}>Forgot password?</a>
        </div>
      </div>
      <div >
        <Button style={{ width: '100%', color:"black", borderColor:"black" }} appearance="ghost">Continue</Button>
      </div>
    </div>
  );
}
