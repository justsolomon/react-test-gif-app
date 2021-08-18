import { render } from "@testing-library/react";
import ErrorMessage from "../errorMessage";

describe("<ErrorMessage />", () => {
  it("should render the error message component properly", () => {
    const { asFragment } = render(
      <ErrorMessage error="An error occurred" retryRequest={() => {}} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
