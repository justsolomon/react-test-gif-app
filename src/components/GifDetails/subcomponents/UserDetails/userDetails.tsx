import { Button } from "components/global/Button";
import Skeleton from "react-loading-skeleton";
import { IUser } from "types/global";
import styles from "./userDetails.module.scss";
import { ReactComponent as ExternalLinkIcon } from "assets/vectors/link.svg";

interface IUserDetails {
  user: IUser;
  source: string;
  loading: boolean;
}

const UserDetails = ({ user, source, loading }: IUserDetails) => {
  return (
    <div className={styles["user-details"]}>
      {user && !loading ? (
        <div className={styles["user-details__group"]}>
          {!loading ? (
            <img
              src={user?.avatar_url}
              alt="User avatar"
              className={styles["user-details__avatar"]}
            />
          ) : (
            <Skeleton height={40} width={40} />
          )}
          <div className={styles["user-details__info"]}>
            <p className={styles["user-details__display-name"]}>
              {loading ? <Skeleton /> : user?.display_name}
            </p>
            <p className={styles["user-details__username"]}>
              {loading ? <Skeleton /> : `@${user?.username}`}
            </p>
          </div>
        </div>
      ) : null}
      {user?.description ? (
        <p className={styles["user-details__bio"]}>{user.description}</p>
      ) : null}
      {!loading ? (
        user ? (
          <Button
            onClick={() =>
              window.open(user.profile_url, "_blank", "noreferrer")
            }
            colorScheme="secondary"
          >
            View profile on Giphy
          </Button>
        ) : null
      ) : (
        <Skeleton height={40} />
      )}
      {user?.website_url || source ? (
        <div className={styles["user-details__website"]}>
          <p className={styles["user-details__website-header"]}>Source:</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={user?.website_url || source}
            className={styles["user-details__website-link"]}
          >
            <ExternalLinkIcon />
            <p className={styles["user-details__website-link__text"]}>
              {user?.website_url || source}
            </p>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default UserDetails;
