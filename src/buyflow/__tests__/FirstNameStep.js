import { render } from "@testing-library/react"; // (or /dom, /vue, ...)
import FirstNameStep from "../FirstNameStep";

test("renders a firstName step input field", () => {
  const queries = render(<FirstNameStep />);
  expect(queries.getByText(/first name/i)).toBeInTheDocument();
});

it("should take a snapshot", () => {
  const { asFragment } = render(<FirstNameStep />);

  expect(asFragment(<FirstNameStep />)).toMatchSnapshot();
});
