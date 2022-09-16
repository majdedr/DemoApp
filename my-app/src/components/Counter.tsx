import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions/counterActions";
import { counterSelector } from "../selectors/counterSelector";
import CustomedButton from "../shared/components/IncrementButton";

const Counter = () => {
  const counter = useSelector(counterSelector);
  const dispatch = useDispatch();

  const incrementButtonClick = () => dispatch(increment());
  const decrememntButtonClick = () => dispatch(decrement());

  return (
    <>
      <CustomedButton onClick={incrementButtonClick} label={"increment"} />
      <br />
      {counter}
      <br />
      <CustomedButton onClick={decrememntButtonClick} label={"decrement"} />
    </>
  );
};

export default Counter;
