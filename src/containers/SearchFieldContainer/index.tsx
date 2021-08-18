import { SearchField } from "components/SearchField";
import useSearchQuery from "hooks/useSearchQuery";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const SearchFieldContainer = (): JSX.Element => {
  const { query: searchQuery } = useSearchQuery();
  const [query, setQuery] = useState<string>(searchQuery);
  const history = useHistory();

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        history.push(`/search?q=${query.replaceAll(" ", "+")}`);
      }}
    >
      <SearchField
        query={query}
        updateQuery={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
    </form>
  );
};

export default SearchFieldContainer;
