import { IGif } from "types/global";
import { UserDetails } from "./subcomponents/UserDetails";
import styles from "./gifDetails.module.scss";
import Skeleton from "react-loading-skeleton";

const GifDetails = ({ gif, loading }: { gif: IGif; loading: boolean }) => {
  return (
    <div className={styles["gif-details"]}>
      <UserDetails
        user={gif?.user}
        loading={loading}
        source={gif?.source || gif?.source_post_url}
      />
      <div className={styles["gif-container"]}>
        <p className={styles["gif-title"]}>
          {gif?.title || <Skeleton width={300} />}
        </p>
        {gif.images ? (
          <img src={gif?.images?.original?.url} alt="Original gif url" />
        ) : (
          <Skeleton height={300} width={500} />
        )}
      </div>
    </div>
  );
};

export default GifDetails;
