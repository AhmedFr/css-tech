import styles from "./Button.module.scss";

export function Button({
  children,
  onClick,
  className,
  iconRight,
  iconLeft,
  ...props
}) {
  return (
    <button class="button" onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export function PrimaryButton({ children, onClick, className, ...props }) {
  return (
    <Button class="button-primary" onClick={onClick} {...props}>
      {children}
    </Button>
  );
}
