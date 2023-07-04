import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <header>
        <h4>Now playing:</h4>
        <h2>String 57th & 9th</h2>
      </header>

      <div className="cd">
        <div className="cd-thumb"></div>
      </div>

      <div className="control">
        <div className="btn btn-repeat">
          <FontAwesomeIcon icon="redo" className="color-red"/>
        </div>
        <div className="btn btn-prev">
          <FontAwesomeIcon icon="step-backward" />
        </div>
        <div className="btn btn-toggle-play">
          <FontAwesomeIcon icon="pause" />
          {/* <FontAwesomeIcon icon="play" /> */}
        </div>
        <div className="btn btn-next">
          <FontAwesomeIcon icon="step-forward" />
        </div>
        <div className="btn btn-random">
          <FontAwesomeIcon icon="random" className="color-red"/>
        </div>
      </div>

      {/* <input
        id="progress"
        className="progress"
        type="range"
        value="0"
        step="1"
        min="0"
        max="100"
      /> */}

      <audio id="audio" src=""></audio>
    </div>
  );
};

export default DashBoard;
