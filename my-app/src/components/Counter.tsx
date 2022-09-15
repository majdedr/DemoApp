import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions/counterActions";
import { counterSelector } from "../selectors/counterSelector";

const Counter = () => {
  const counter = useSelector(counterSelector);
  const dispatch = useDispatch();

  const incrementButtonClick = () => dispatch(increment());
  const decrememntButtonClick = () => dispatch(decrement());

  return (
    <>
      <button onClick={incrementButtonClick}> {"increment"} </button>
      <br />
      {counter}
      <br />
      <button onClick={decrememntButtonClick}> {"decrement"} </button>
    </>
  );
};

export default Counter;
