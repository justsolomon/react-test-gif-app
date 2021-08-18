import { render } from "@testing-library/react";
import { gif } from "utils/testUtils";
import UserDetails from "../userDetails";

describe("<UserDetails />", () => {
  it("should render the user details component properly", () => {
    const { asFragment } = render(
      <UserDetails user={gif.user} source={""} loading={false} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
