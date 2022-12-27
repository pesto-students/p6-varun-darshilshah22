import { createStore } from "redux";

function lightReducer(currentState = false, action) {
  // console.log(currentState);

  switch (action.type) {
    case "LIGHT_CHANGE": {
      return { light: !currentState.light };
    }

    default:
      return currentState;
  }
}

const store = createStore(lightReducer);

export { store };
