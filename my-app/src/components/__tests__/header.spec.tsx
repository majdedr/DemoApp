import { render, screen } from "@testing-library/react";
import { Header } from "../header";


test("header renders properly", () => {
  render(<Header />);
  expect(screen.getByText("Logo")).toBeTruthy();
  const list = screen.getAllByRole("link");
  expect(list).toHaveLength(4)


});
