import { AxiosError } from "axios";

const getErrorMessage = (err: AxiosError): string => {
  let errorMessage;
  if (err.response) errorMessage = err.response.data.message;
  else errorMessage = err.message;

  return errorMessage;
};

export default getErrorMessage;
