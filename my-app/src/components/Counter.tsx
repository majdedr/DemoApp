import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions/counterActions";

const Counter = (props: any) => {
  const { state } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const incrementButtonClick = () => dispatch(increment());
  const decrememntButtonClick = () => dispatch(decrement());

  return (
    <>
      <button onClick={incrementButtonClick}> {"increment"} </button>
      <br />
      {state.counter}
      <br />
      <button onClick={decrememntButtonClick}> {"decrement"} </button>
    </>
  );
};

export default Counter;
