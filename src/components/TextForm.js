import React, { useState } from "react";
import PropTypes from 'prop-types';
export default function TextForm(props) {
  const handleOnChnage = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("  Converted to Upper Case","success !!")
  };
  const handleLoClick = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("  Converted to Lower Case","success !!")
  };
  const handleClearClick = (event) => {
    let newText = "";
    setText(newText);
    props.showAlert("  Text Cleared","success !!")

  };
  const [text, setText] = useState("Enter Text Here");
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("  Copied to Clipboard","success !!")

  };
  return (
    <>
      <div className="container" >
        <h1 className="my-4">{props.heading}</h1>
        <div className="mb-3" >
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor: props.mode==='info'?'white':'grey', color: props.mode==='info'?'black':'white'}}
            onChange={handleOnChnage}
            id="myBox"
            rows={8}
          />
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>
          Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Lower case
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-2" >
        <h2 className="my-3">Summery</h2>
        <p>
          {text.split(" ").length} words {text.length} char
        </p>
        <p>{0.008*text.split(" ").length} Minuites of reading</p>
      </div>
    </>
  );
}
