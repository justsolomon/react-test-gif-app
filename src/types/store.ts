import { IGif } from "./global";

export interface RootState {
  searchResults: ISearchGifReducer;
  gif: DefaultReducer<IGif>;
}

export interface Action<Payload = null> {
  type: string;
  payload?: Payload;
}

export interface DefaultReducer<DataType> {
  loading: boolean;
  success: boolean;
  error: string;
  data: DataType;
}

export interface ISearchGifReducer extends DefaultReducer<IGif[]> {
  page: number;
  nextPage: boolean;
  query: string;
  totalCount: number;
}
