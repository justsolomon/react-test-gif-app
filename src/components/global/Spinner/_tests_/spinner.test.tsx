import { render } from "@testing-library/react";
import Spinner from "../";

describe("<Spinner />", () => {
  it("should render the Spinner component properly", () => {
    const { asFragment } = render(<Spinner />);

    expect(asFragment()).toMatchSnapshot();
  });
});
