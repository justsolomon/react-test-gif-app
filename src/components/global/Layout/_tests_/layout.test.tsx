import { render } from "@testing-library/react";
import Layout from "../layout";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useLocation: () => ({
    state: null
  })
}));

describe("<Layout />", () => {
  it("should render the layout component properly", () => {
    const { asFragment } = render(<Layout>Test Layout</Layout>);

    expect(asFragment()).toMatchSnapshot();
  });
});
