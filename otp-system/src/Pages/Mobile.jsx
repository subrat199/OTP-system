import React from "react";
import { useNavigate } from "react-router-dom";
const Mobile = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/otp")
    }
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
        Enter Your Mobile Number
      </p>
      <p
        style={{
          color: "var(--gray, #8391A1)",
          fontFamily: "Urbanist",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "150%",
        }}
      >
        We will send you the 4 digit verification conde
      </p>
      <input
        type="text"
        placeholder="Enter your mobile number"
        style={{
          width: "330px",
          height: "56px",
          flexShrink: "0",
          borderRadius: "8px",
          border: "1px solid #DADADA",
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
        }}>
            Sendcode

      </button>
    </div>
  );
};

export default Mobile;
