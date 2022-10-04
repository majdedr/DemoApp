import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/actions/counterActions";
import { counterSelector } from "../store/selectors/counterSelector";
import "../shared/sharedStyle.css";
import "./styles.css";
import { CustomedButton } from "../shared/components/UI/incrementButton";

const Counter = () => {
  const counter = useSelector(counterSelector);
  const dispatch = useDispatch();

  const incrementButtonClick = () => dispatch(increment());
  const decrememntButtonClick = () => dispatch(decrement());

  return (
    <div className="counterContainer">
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
    </div>
  );
};

export default Counter;
