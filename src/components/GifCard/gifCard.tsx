import LazyLoad from "react-lazyload";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { IGif } from "types/global";
import styles from "./gifCard.module.scss";

interface IGifCard {
  gif: IGif;
}

const GifCard = ({ gif }: IGifCard): JSX.Element => {
  const { images } = gif;

  return (
    <LazyLoad once placeholder={<Skeleton height={images.original.height} />}>
      <Link to={`/gif/${gif.id}`} className={styles["card"]}>
        <div className={styles["card__container"]}>
          <img
            src={
              images.fixed_height_small?.webp ||
              images.fixed_height_downsampled?.webp ||
              images.fixed_height?.webp ||
              images.fixed_width_small?.webp ||
              images.fixed_width_downsampled?.webp ||
              images.fixed_width?.webp ||
              images.downsized?.url ||
              images.downsized_medium?.url ||
              images.downsized_large?.url ||
              images.original.url
            }
            className={styles["card__gif"]}
            alt={gif.title}
          />
          {gif.user ? (
            <div className={styles["card__user"]}>
              <img
                src={gif.user?.avatar_url}
                className={styles["card__user-avatar"]}
                alt={`${gif.user?.display_name}'s avatar`}
              />
              <div className={styles["card__user-info"]}>
                <p className={styles["card__user-displayname"]}>
                  {gif.user?.display_name}
                </p>
                <p
                  className={styles["card__user-name"]}
                >{`@${gif.user?.username}`}</p>
              </div>
            </div>
          ) : null}
        </div>
      </Link>
    </LazyLoad>
  );
};

export default GifCard;
