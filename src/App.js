import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./styles/main.scss";
import rock from "./images/rock.png";
import paper from "./images/paper.png";
import scissor from "./images/scissor.png";
import robot from "./images/robot.png";

function App() {
  const [computer, setComputer] = useState();
  console.log(Math.floor(Math.random() * 3));

  return (
    <div className="main-container">
      <div className="grid-layout">
        <div className="player-one">
          <h2 className="title">Player One</h2>
          <div className="box">
            <div className="choice">
              <Avatar className="rock" src={rock} />
            </div>
            <div className="choice">
              <Avatar className="paper" src={paper} />
            </div>
            <div className="choice">
              <Avatar className="scissor" src={scissor} />
            </div>
          </div>
        </div>
        <div className="btn-wrapper">
          <button className="btn">Play</button>
        </div>
        <div className="computer">
          <h2 className="title">Computer</h2>
          <div className="box">
            <Avatar className="robot" src={robot} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
