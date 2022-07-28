import React,{useState} from 'react'
import './clock.css';
export const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();
  const [curTime, setCurTime] = useState(time);
  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div
    style={{
      margin:"15%",
      padding:"5%",
      display: "grid",
      justifyContent: "center",
      border: "2px solid #ff5912",
      background:"#200506",
      color:"#fff"
    }}
  >
    <h2>Digital Clock</h2>
    <h1>{curTime}</h1>
  </div>
  )
}
