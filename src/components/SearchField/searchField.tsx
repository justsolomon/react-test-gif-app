import { Button } from "components/global/Button";
import styles from "./searchField.module.scss";
import { ReactComponent as SearchIcon } from "assets/vectors/search.svg";

interface ISearchField {
  query: string;
  updateQuery: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchField = ({ query, updateQuery }: ISearchField): JSX.Element => {
  return (
    <div className={styles["search-input__container"]}>
      <input
        className={styles["search-input__field"]}
        placeholder="Search for GIF"
        value={query}
        onChange={updateQuery}
      />
      <Button type="submit">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchField;
