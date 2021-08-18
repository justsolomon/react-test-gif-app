import { Dispatch } from "redux";
import axios from "utils/AxiosBase";
import getErrorMessage from "utils/GetErrorMessage";
import {
  searchGifsFailure,
  searchGifsRequest,
  searchGifsSuccess
} from "./searchActions";

const searchGifs = (query: string, page: number) => {
  return (dispatch: Dispatch): void => {
    dispatch(searchGifsRequest(query));
    axios
      .get(`/gifs/search`, {
        params: {
          q: query,
          offset: page,
          limit: 50
        }
      })
      .then((res) => {
        dispatch(searchGifsSuccess(res.data));
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(searchGifsFailure(errorMessage));
      });
  };
};

export default searchGifs;
