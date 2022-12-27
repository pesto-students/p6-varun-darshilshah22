import "./index.css";
import { useState } from "react";
import { connect } from "react-redux";

function LightOnOff(props) {
  const { isLightOn = false, dispatch } = props;

  function lightChangeState(isOn) {
    return {
      type: "LIGHT_CHANGE",
      light: isOn
    };
  }

  const on = isLightOn ? "lit" : "dark";

  return (
    <div className={`room ${on}`}>
      the room is {on}
      <br />
      <button
        onClick={() => {
          dispatch(lightChangeState(isLightOn));
          //console.log(`light is ${isLightOn}`);
        }}
      >
        flip
      </button>
    </div>
  );
}

const ConnectedLightOnOff = connect((state) => {
  return {
    isLightOn: state.light
  };
})(LightOnOff);

function Room() {
  return <ConnectedLightOnOff />;
}

export default Room;
