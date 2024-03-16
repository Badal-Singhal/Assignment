import React from "react";
import { Button } from "rsuite";

export default function Block({ src, text, btn_text, srctext }) {
  return (
    <div className="block">
      <div style={{ display: "flex", justifyContent: "left", margin: "10px" }}>
        <div style={{ margin: "10px" }}>
          <img src={src} alt="logo" />
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            margin: "10px",
          }}
        >
          {srctext}
        </div>
      </div>
      <div>
        <p className="text2">{text}</p>
      </div>
      <div>
        <Button
          style={{
            color: "#8064A2",
            borderColor: "#8064A2",
            width: "122px",
            height: "40px",
            borderRadius: "8px",
          }}
          appearance="ghost"
        >
          {btn_text}
        </Button>
      </div>
    </div>
  );
}
