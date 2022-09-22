import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/actions/counterActions";
import { counterSelector } from "../store/selectors/counterSelector";
import CustomedButton from "../shared/components/UI/IncrementButton";
import "../shared/sharedStyle.css";

const Counter = () => {
  const counter = useSelector(counterSelector);
  const dispatch = useDispatch();

  const incrementButtonClick = () => dispatch(increment());
  const decrememntButtonClick = () => dispatch(decrement());

  return (
    <>
      <CustomedButton
        className="button-9"
        onClick={incrementButtonClick}
        label={"increment"}
      />
      {counter}
      <CustomedButton
        className="button-6"
        onClick={decrememntButtonClick}
        label={"decrement"}
      />
    </>
  );
};

export default Counter;
