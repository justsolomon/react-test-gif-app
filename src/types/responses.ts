import { IGif } from "./global";

interface IPagination {
  offset: number;
  total_count: number;
  count: number;
}

interface IMeta {
  msg: string;
  status: number;
  response_id: string;
}

export interface SearchResponseData {
  data: IGif[];
  pagination: IPagination;
  meta: IMeta;
}

export interface SingleGifResponseData {
  data: IGif;
  meta: IMeta;
}
