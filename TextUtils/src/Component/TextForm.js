import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleInverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text has been inverted", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges()
    props.showAlert("Text Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className="mb-2" >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 " onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={handleInverseClick}>
          Inverse
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={handleExtraSpaces}>
          Remove Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}

export default TextForm;
