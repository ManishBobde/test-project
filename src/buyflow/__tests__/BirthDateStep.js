import { render } from "@testing-library/react"; // (or /dom, /vue, ...)
import BirthDateStep from "../BirthDateStep";

test("renders a birthDate step input field", () => {
  const queries = render(<BirthDateStep />);
  expect(queries.getByText(/birth date/i)).toBeInTheDocument();
});

it("should take a snapshot", () => {
  const { asFragment } = render(<BirthDateStep />);

  expect(asFragment(<BirthDateStep />)).toMatchSnapshot();
});
