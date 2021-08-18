import { render } from "@testing-library/react";
import { gif } from "utils/testUtils";
import GifCard from "../gifCard";

describe("<GifCard />", () => {
  it("should render the GIF card component properly", () => {
    const { asFragment } = render(<GifCard gif={gif} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
