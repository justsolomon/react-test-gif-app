import styles from "./button.module.scss";

interface IButton {
  children: React.ReactNode;
  type?: "button" | "reset" | "submit";
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  variant?: "solid" | "ghost" | "transparent";
  colorScheme?: "primary" | "secondary" | "none";
  style?: object;
  onClick?: React.MouseEventHandler;
}

function Button({
  isDisabled,
  isLoading,
  children,
  className = "",
  isFullWidth,
  style,
  type = "button",
  variant = "solid",
  colorScheme = "none",
  onClick
}: IButton) {
  return (
    <button
      type={type}
      className={`${styles["button"]} ${className} ${
        styles["button--" + variant]
      } ${styles["button--" + colorScheme]} ${
        isFullWidth ? styles["button--full"] : ""
      }`}
      disabled={isDisabled || isLoading}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
