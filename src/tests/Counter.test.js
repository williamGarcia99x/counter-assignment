// import necessary react testing library helpers here
import { render, fireEvent, screen } from "@testing-library/react";
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  const counterWord = screen.getByText(/Counter/i);
  expect(counterWord).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId("count");
  expect(initialCount).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);
  const countAfterIncrement = screen.getByTestId("count");
  expect(countAfterIncrement).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);
  const countAfterDecrement = screen.getByTestId("count");
  expect(countAfterDecrement).toHaveTextContent("-1");
});
