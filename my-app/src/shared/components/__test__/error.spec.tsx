import { render, screen } from "@testing-library/react";
import RouteError from "../error/Error";

test("error page renders successfully", () => {
  render(<RouteError />);

  expect(screen.getByText("Page not found")).toBeTruthy();
});
