import { DECREMENTCOUNTER, INCREMENTCOUNTER } from "../../shared/counterConstants";

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENTCOUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREMENTCOUNTER:
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
};

const state = { counterState: counterReducer };
export default state;
