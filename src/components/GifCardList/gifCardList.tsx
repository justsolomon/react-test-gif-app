import GifCard from "components/GifCard/gifCard";
import { IGif } from "types/global";
import styles from "./gifCardList.module.scss";
import Masonry from "react-masonry-css";
import Spinner from "components/global/Spinner";

interface IGifCardList {
  gifs: IGif[];
  loaderRef: (node?: Element | null) => void;
  nextPage: boolean;
}

const GifCardList = ({
  gifs,
  loaderRef,
  nextPage
}: IGifCardList): JSX.Element => {
  const breakpoints = {
    default: 5,
    1100: 4,
    768: 3,
    480: 2
  };

  return (
    <Masonry
      breakpointCols={breakpoints}
      className={styles["card-list"]}
      columnClassName={styles["card-list__column"]}
      data-testid="card-list"
    >
      {gifs.map((gif, index) => (
        <GifCard gif={gif} key={index} />
      ))}
      {nextPage ? (
        <div ref={loaderRef} data-testid="card-list__loader">
          <Spinner />
        </div>
      ) : null}
    </Masonry>
  );
};

export default GifCardList;
