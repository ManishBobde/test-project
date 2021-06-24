import { render } from "@testing-library/react"; // (or /dom, /vue, ...)
import EmailStep from "../EmailStep";

test("renders a email step input field", () => {
  const queries = render(<EmailStep />);
  expect(queries.getByText(/email/i)).toBeInTheDocument();
});

it("should take a snapshot", () => {
  const { asFragment } = render(<EmailStep />);

  expect(asFragment(<EmailStep />)).toMatchSnapshot();
});
