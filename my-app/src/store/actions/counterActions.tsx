import { INCREMENTCOUNTER, DECREMENTCOUNTER } from "../../shared/counterConstants";

export const increment = () => {
  return {
    type: INCREMENTCOUNTER,
  };
};

export const decrement = () => {
  return {
    type: DECREMENTCOUNTER,
  };
};
