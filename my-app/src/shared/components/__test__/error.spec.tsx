import { render, screen } from "@testing-library/react";
import { RouteNotFound } from "../error";

test("error page renders successfully", () => {
  render(<RouteNotFound />);

  expect(screen.getByText("Page not found")).toBeTruthy();
});
