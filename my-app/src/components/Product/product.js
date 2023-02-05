import './product.css'
import React, { useState } from "react";


const Product = () => {
    <p>hello</p>
  const [showText, setShowText] = useState(false);
  const [showAudio, setShowAudio] = useState(false);
  return (
  <div class="container">
    <div class="left-div">
        <img className="big-modern-img" src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1617140025816-Z2VQ5YFH9WJ3AEG6C5CQ/Ind-3160.jpg?format=2500w" alt="Product picture" />
    </div>
    <div class="parent-container">
        <div class="child-div"><p>Product name</p></div>
        <div class="child-div">
        <div className="button-container">
      <div className="buttons">
        <button className="text-button" onClick={() => setShowText(!showText)}>Text</button>
        <button className="audio-button" onClick={() => setShowAudio(!showAudio)}>Audio</button>
      </div>
      {showText && (
        <div className="text-box">
          <p>Please tell me what this is...</p>
        </div>
      )}
      {showAudio && (
        <audio className="audio-player" controls>
          <source src="audio.mp3" type="audio/mpeg" />
        </audio>
      )}
    </div>
        </div>
    </div>
    </div>)

};

export default Product;
