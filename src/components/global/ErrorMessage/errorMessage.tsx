import { Button } from "../Button";
import styles from "./errorMessage.module.scss";
import { ReactComponent as ErrorIcon } from "assets/vectors/error.svg";

interface IErrorMessage {
  retryRequest: () => void;
  error: string;
}

function ErrorMessage({ retryRequest, error }: IErrorMessage) {
  return (
    <div className={styles["error-message"]}>
      <ErrorIcon />
      <p className={styles["error-message__description"]}>
        {error === "Network Error"
          ? "Looks like you lost your connection. Please check it and try again"
          : error}
      </p>
      <Button className="error-message__button" onClick={retryRequest}>
        Try again
      </Button>
    </div>
  );
}

export default ErrorMessage;
