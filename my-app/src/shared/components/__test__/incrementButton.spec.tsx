import { render, screen, fireEvent } from "@testing-library/react";
import {CustomedButton} from "../UI/incrementButton";

test("calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  const buttonLabel = "Click Me";

  render(
    <CustomedButton
      onClick={handleClick}
      label={buttonLabel}
      data-testid="testedButton"
    />
  );
  fireEvent.click(screen.getByText(buttonLabel));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("button display proper label", () => {
  const buttonLabel = "Click Me";

  render(<CustomedButton label={buttonLabel} data-testid="testedButton" />);

  expect(screen.getByText("Click Me")).toBeTruthy();
  expect(screen.getAllByTestId("testedButton")).toBeTruthy();
});
