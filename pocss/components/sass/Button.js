import "@/styles/Button.module.scss"

export function Button({
  children,
  onClick,
  className,
  iconRight,
  iconLeft,
  ...props
}) {
  return (
    <button className={`btn ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export function PrimaryButton({ children, onClick, className, ...props }) {
  return (
    <Button className="primary" onClick={onClick} {...props}>
      {children}
    </Button>
  );
}
