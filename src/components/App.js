import React, { useState,useEffect } from "react";
import './../styles/App.css';

const App = (props) => {
let[showpara,setShowpara]=useState(false);
useEffect(()=>{
  <p className="hide show"></p>
});
  return (
    <div className="App" id="main">
      // Do not alter the main div
      <button onClick={()=>setShowpara(true)}>Clickme</button>
      {
        showpara && (
          <p className="hide show">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
        )
      }
    </div>
  );
}

export default App
