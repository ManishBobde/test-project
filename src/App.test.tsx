import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Get started/i);
  expect(linkElement).toBeInTheDocument();
});

const renderWithRouter = (component: any) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it("should render the home page", () => {
  const { container } = renderWithRouter(<App />);

  expect(container.innerHTML).toMatch(/get started/i);
});

it("should navigate to the buy in  page", () => {
  const { container, getByText } = renderWithRouter(<App />);

  fireEvent.click(getByText(/get started/i));

  expect(container.innerHTML).toMatch(/first name/i);
});
