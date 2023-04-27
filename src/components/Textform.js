// import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
// import "./App.css";
export default function Textform(props) {
  const heandelOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const heandleUpClick = () => {
    console.log("UpperCase Was Clicked" + Text);
    let newtext = Text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To Upper Case!", "success");
  };

  const heandleLoClick = () => {
    let newtext = Text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted To LowerCase!", "success");
  };

  const heandleReClick = () => {
    let newtext;
    let a = document.getElementById("in1").value;
    let b = document.getElementById("in2").value;
    newtext = Text.replaceAll(a, b);
    setText(newtext);
    document.getElementById("in1").value = null;
    document.getElementById("in2").value = null;
    props.showAlert("World Replace completed!", "success");
  };

  const heandleclearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared completed!", "success");
  };

  const heandlecopyClick = () => {
    
    navigator.clipboard.writeText(Text);
    props.showAlert("Copied to clipboard!", "success");
  };

  const heandleremovClick = () => {
    let newtext = Text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert(" Extra Spaces Removed!", "success");
  };

  const [Text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2 className="mb-2">{props.heading} </h2>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            className="form-control"
            onChange={heandelOnChange}
            placeholder="Enter Text Here ?"
            value={Text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <div className=" container input-group   my-3">

          <input
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            type="text"
            placeholder="Enter Any World "
            className="h-25 form-control w-25 p-3"
            id="in1"
          />

          <input
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            type="text"
            placeholder="Enter New World "
            className="h-25 form-control w-25 p-3"
            id="in2"
          />

        </div>
        <div className=" container input-group   my-3">
        <button
          disabled={Text.length===0}
          className=" w-30 btn btn-primary mx-3 my-2"
          onClick={heandleUpClick}

        >

          To UpperCase

        </button>

        <button
        disabled={Text.length===0}
          className=" w-30 btn btn-primary mx-3 my-2"
          onClick={heandleLoClick}
        >
          To LowerCase
        </button>

        <button
        disabled={Text.length===0}
          className=" w-30 btn btn-primary mx-3 my-2"
          onClick={heandleReClick}
        >
          Replace World
        </button>

        <button
        disabled={Text.length===0}
          className="w-30 btn btn-primary mx-3 my-2"
          onClick={heandleclearClick}
        >
          Clear Textarea
        </button>

        <button
        disabled={Text.length===0}
          className="w-30 btn btn-primary mx-2 my-2"
          onClick={heandlecopyClick}
        >
          Copy Textarea
        </button>

        <button
        disabled={Text.length===0}
          className="w-30 btn btn-primary mx-3 my-2"
          onClick={heandleremovClick}
        >
          Remove Spaces 
        </button>

      </div>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>

        <p>

          <b>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> and<b> {Text.length}</b> characters

        </p>

        <p>

          <b>{0.008 * Text.split(" ").filter((element)=>{return element.length!== 0}).length}</b> Minutes Read

        </p>

        <h2>Preview</h2>
            <div className="box container">

        <p>

          {Text.length > 0
            ? Text
            : "Nothing To Preview!"
          }

        </p>
          </div>

      </div>
    </>
  );
}
