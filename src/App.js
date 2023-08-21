import { Fragment } from "react";
import "./app.css";

function App() {
  return (
    <Fragment>
      <div id="outer">
      <label for="dropdown"><b>Choose a car:</b></label>
      <br></br>
      <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
     </div>
      </div>
    </Fragment>
  );
}

export default App;
