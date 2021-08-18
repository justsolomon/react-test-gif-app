import { render } from "@testing-library/react";
import { gif } from "utils/testUtils";
import GifDetails from "../gifDetails";

describe("<GifDetails />", () => {
  it("should render the GIF details component properly", () => {
    const { asFragment } = render(<GifDetails gif={gif} loading={false} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
