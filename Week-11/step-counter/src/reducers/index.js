import { createStore } from 'redux';

function addStepReducer(currentState = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return currentState + 1;

        case "RESET":
            return 0;

        default:
            return currentState;
    }
}

const store = createStore(addStepReducer);

export { store };