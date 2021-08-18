import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useSearchQuery = (): { query: string } => {
  const [query, setQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    //get search params
    const params = new URLSearchParams(location.search);

    const query = params.get("q");
    if (query) {
      setQuery(query.replaceAll("+", " "));
    }
  }, [location]);

  return { query };
};

export default useSearchQuery;
