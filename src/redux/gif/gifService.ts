import { Dispatch } from "redux";
import axios from "utils/AxiosBase";
import getErrorMessage from "utils/GetErrorMessage";
import {
  fetchGifFailure,
  fetchGifRequest,
  fetchGifSuccess
} from "./gifActions";

const fetchGif = (id: string) => {
  return (dispatch: Dispatch): void => {
    dispatch(fetchGifRequest());
    axios
      .get(`/gifs/${id}`, {
        params: { gif_id: id }
      })
      .then((res) => {
        dispatch(fetchGifSuccess(res.data.data));
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(fetchGifFailure(errorMessage));
      });
  };
};

export default fetchGif;
