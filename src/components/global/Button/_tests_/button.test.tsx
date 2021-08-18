import { render } from "@testing-library/react";
import Button from "../button";

describe("<Button />", () => {
  it("should render the button component properly", () => {
    const { asFragment } = render(<Button>Test button</Button>);

    expect(asFragment()).toMatchSnapshot();
  });
});
