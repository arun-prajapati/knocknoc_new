"use client";
import { TypeAnimation } from "react-type-animation";

const TypingBox = () => {
  return (
    <TypeAnimation
      sequence={[
        "Simply search for your fav service, select the date and time , input your address and self checkout!",
        5000,
        "",
        100,
        "Simply search for your fav service, select the date and time , input your address and self checkout!",
        5000,
        "",
        100,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1rem", display: "inline-block" }}
      repeat={Infinity}
      className="pera"
    />
  );
};

export default TypingBox;
