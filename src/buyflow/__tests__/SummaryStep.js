import { render } from "@testing-library/react"; // (or /dom, /vue, ...)
import SummaryStep from "../SummaryStep";
import { MemoryRouter } from "react-router-dom";

it("renders a summary of all the details entered", async () => {
  const collectedDataMock = {
    firstName: "john",
    lastName: "doe",
    birthDate: "1998-09-19",
    email: "johndoe@test.com",
    age: "43",
  };
  const queries = render(<SummaryStep collectedData={collectedDataMock} />, {
    wrapper: MemoryRouter,
  });
  expect(queries.getByText(/purchase/i)).toBeInTheDocument();
});

it("should take a snapshot", () => {
  const collectedDataMock = {
    firstName: "john",
    lastName: "doe",
    birthDate: "1998-09-19",
    email: "johndoe@test.com",
    age: "43",
  };
  const { asFragment } = render(
    <SummaryStep collectedData={collectedDataMock} />,
    {
      wrapper: MemoryRouter,
    }
  );

  expect(asFragment(<SummaryStep />)).toMatchSnapshot();
});
