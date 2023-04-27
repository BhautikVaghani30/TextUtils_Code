// import logo from './logo.svg';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import "./App.css";
import Alerts from "./components/Alerts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Has Been Enabled", "success");
      // document.title = "TextUtils - Home - DarkMode";
      // setInterval(() => {
      //   document.title = "textUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Now";
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
      // document.title = "TextUtils - Home - LightMode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          togglemode={togglemode}
          title="TextUtils"
          page1="Home"
          page2="About"
        />

        <Alerts alerts={alert} />

        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About mode={mode}/>
            </Route>
            <Route path="/">
              <Textform
                showAlert={showAlert}
                mode={mode}
                heading="Try TextUtil - Word Counter, Character Counter, Remove Extra Spaces"
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
