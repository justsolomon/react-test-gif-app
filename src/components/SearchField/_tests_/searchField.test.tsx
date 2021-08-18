import { render } from "@testing-library/react";
import SearchField from "../searchField";

describe("<SearchField />", () => {
  it("should render the SearchField component properly", () => {
    const { asFragment } = render(
      <SearchField
        query="test"
        updateQuery={(e) => console.log(e.target.value)}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
