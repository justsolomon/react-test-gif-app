import SearchFieldContainer from "containers/SearchFieldContainer";
import styles from "./layout.module.scss";

interface ILayout {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["layout__background"]}>
        <SearchFieldContainer />
      </div>
      <div className={styles["layout__content"]}>{children}</div>
    </div>
  );
};

export default Layout;
