import { render } from "@testing-library/react"; // (or /dom, /vue, ...)
import LastNameStep from "../LastNameStep";

test("renders a lastName step input field", () => {
  const queries = render(<LastNameStep />);
  expect(queries.getByText(/last name/i)).toBeInTheDocument();
});

it("should take a snapshot", () => {
  const { asFragment } = render(<LastNameStep />);

  expect(asFragment(<LastNameStep />)).toMatchSnapshot();
});
