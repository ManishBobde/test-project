import { render } from "@testing-library/react"; // (or /dom, /vue, ...)
import AgeStep from "../AgeStep";

test("renders a age step input field", () => {
  const queries = render(<AgeStep />);
  expect(queries.getByText(/age/i)).toBeInTheDocument();
});

it("should take a snapshot", () => {
  const { asFragment } = render(<AgeStep />);

  expect(asFragment(<AgeStep />)).toMatchSnapshot();
});
