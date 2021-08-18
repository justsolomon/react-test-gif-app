import { GifDetails } from "components/GifDetails";
import { ErrorMessage } from "components/global/ErrorMessage";
import SEO from "components/global/SEO";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGifSuccess } from "redux/gif/gifActions";
import fetchGif from "redux/gif/gifService";
import { RootState } from "types/store";

const GifDetailsContainer = () => {
  const { gif, searchResults: allGifs } = useSelector(
    (state: RootState) => state
  );
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const { data, loading, error } = gif;
  const { data: searchResults } = allGifs;

  useEffect(() => {
    //check if gif data exists in search results;
    const gif = searchResults.find((gif) => gif.id === id);

    if (gif) dispatch(fetchGifSuccess(gif));
    else dispatch(fetchGif(id));
  }, [id]);

  return (
    <>
      <SEO
        prefix={data.title || "Single GIF"}
        path={`/gif/${id}`}
        description={data.title || "Single GIF description"}
      />
      {error ? (
        <ErrorMessage
          error={error}
          retryRequest={() => dispatch(fetchGif(id))}
        />
      ) : (
        <GifDetails gif={data} loading={loading} />
      )}
    </>
  );
};

export default GifDetailsContainer;
