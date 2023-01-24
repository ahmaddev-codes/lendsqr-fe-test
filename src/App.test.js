import { render, screen } from "@testing-library/react";
import App from "./App";

test("cotains text", () => {
  render(<App />);
  const linkElement = screen.findByText(/avatar/i);
  expect(linkElement).toBeInTheDocument();
});
