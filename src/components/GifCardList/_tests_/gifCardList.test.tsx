import { render, screen } from "@testing-library/react";
import { gif } from "utils/testUtils";
import GifCardList from "../gifCardList";

const renderGifCardList = (nextPage: boolean) => {
  return render(
    <GifCardList
      gifs={new Array(5).fill(gif)}
      nextPage={nextPage}
      loaderRef={() => null}
    />
  );
};

describe("<GifCardList />", () => {
  it("should render the GIF card list component properly", () => {
    const { asFragment } = renderGifCardList(false);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render the loader if next page exists", () => {
    renderGifCardList(true);

    const loader = screen.queryByTestId("card-list__loader");

    expect(loader).toBeInTheDocument();
    expect(loader?.querySelector("svg")).toBeInTheDocument();
  });
  it("should not render the loader if next page doesn't exist", () => {
    renderGifCardList(false);

    expect(screen.queryByTestId("card-list__loader")).not.toBeInTheDocument();
  });
});
