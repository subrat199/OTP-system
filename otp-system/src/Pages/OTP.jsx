import React from "react";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <p
        style={{
          color: "var(--dark, #1E232C)",
          fontFamily: "Urbanist",
          fontSize: "26px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "130%",
          letterSpacing: "-0.26px",
        }}
      >
        OTP Verification
      </p>
      <p
        style={{
          color: "var(--gray, #838BA1)",
          fontFamily: "Urbanist",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "150%",
        }}
      >
        Enter the verification code we just sent on your Mobile Number.
      </p>
      <input
        type="text"
        style={{
          width: "49px",
          height: "60px",
          flexShrink: "0",
          borderRadius: "8px",
          border: "1px solid var(--border, #E8ECF4)",
          background: "#F7F8F9",
        }}
      />{" "}
      <input
        type="text"
        style={{
          width: "49px",
          height: "60px",
          flexShrink: "0",
          borderRadius: "8px",
          border: "1px solid var(--border, #E8ECF4)",
          background: "#F7F8F9",
        }}
      />{" "}
      <input
        type="text"
        style={{
          width: "49px",
          height: "60px",
          flexShrink: "0",
          borderRadius: "8px",
          border: "1px solid var(--border, #E8ECF4)",
          background: "#F7F8F9",
        }}
      />{" "}
      <input
        type="text"
        style={{
          width: "49px",
          height: "60px",
          flexShrink: "0",
          borderRadius: "8px",
          border: "1px solid var(--border, #E8ECF4)",
          background: "#F7F8F9",
        }}
      />{" "}
      <input
        type="text"
        style={{
          width: "49px",
          height: "60px",
          flexShrink: "0",
          borderRadius: "8px",
          border: "1px solid var(--border, #E8ECF4)",
          background: "#F7F8F9",
        }}
      />{" "}
      <input
        type="text"
        style={{
          width: "49px",
          height: "60px",
          flexShrink: "0",
          borderRadius: "8px",
          border: "1px solid var(--border, #E8ECF4)",
          background: "#F7F8F9",
        }}
      />{" "}
      <br />
      <button
        onClick={handleClick}
        style={{
          width: "330px",
          height: "56px",
          flexShrink: 0,
          borderRadius: "8px",
          background: "#FF6D6A",
          marginTop: "20px",
          textAlign: "center",
          color: "white",
          color: "var(--white, #FFF)",
          fontFamily: "Urbanist",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
        }}
      >
        Verify
      </button>
      <p>Didn’t received code? Resend</p>
    </div>
  );
};

export default OTP;
