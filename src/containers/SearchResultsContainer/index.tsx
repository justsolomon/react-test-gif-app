import { GifCardList } from "components/GifCardList";
import SEO from "components/global/SEO";
import Spinner from "components/global/Spinner";
import useSearchQuery from "hooks/useSearchQuery";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import searchGifs from "redux/search/searchService";
import { RootState } from "types/store";
import styles from "components/GifCardList/gifCardList.module.scss";
import { ErrorMessage } from "components/global/ErrorMessage";

const SearchResultsContainer = (): JSX.Element => {
  const { query: initialQuery } = useSearchQuery();
  const { data, loading, error, nextPage, query, page, totalCount, success } =
    useSelector((state: RootState) => state.searchResults);

  const { ref, inView } = useInView({ threshold: 0.5 });
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialQuery) dispatch(searchGifs(initialQuery, 0));
  }, [initialQuery, dispatch]);

  useEffect(() => {
    if (inView && nextPage) {
      dispatch(searchGifs(query, page + 1));
    }
  }, [inView, query, nextPage, page, dispatch]);

  return (
    <>
      <SEO
        prefix={`${initialQuery || "Search"} GIFs`}
        path={`/search`}
        description={`Search results for "${initialQuery}"`}
      />
      {error ? (
        <ErrorMessage
          error={error}
          retryRequest={() =>
            dispatch(searchGifs(query || initialQuery, page ? page + 1 : 0))
          }
        />
      ) : null}
      {!data.length && loading ? <Spinner /> : null}
      {data.length ? (
        <>
          <p className={styles["search-header"]}>
            {`Found ${totalCount} search results for`}{" "}
            <span>{`${query}:`}</span>
          </p>
          <GifCardList gifs={data} loaderRef={ref} nextPage={nextPage} />
        </>
      ) : success ? (
        <p className={styles["search-header"]} style={{ textAlign: "center" }}>
          No results found for <span>{query}</span>
        </p>
      ) : null}
    </>
  );
};

export default SearchResultsContainer;
