import Skeleton from "react-loading-skeleton";
import styles from "./gifStat.module.scss";

interface IGifStat {
  title: string;
  value: string;
}

const GifStat = ({ title, value }: IGifStat) => {
  return (
    <div className={styles["gif-stat"]}>
      <p className={styles["gif-stat__title"]}>{`${title}:`}</p>
      <p className={styles["gif-stat__value"]}>{value || <Skeleton />}</p>
    </div>
  );
};

export default GifStat;
