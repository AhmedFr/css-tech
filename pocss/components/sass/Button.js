import "@/styles/Button.module.scss";

export function Button({
  children,
  onClick,
  className = "btn__primary",
  iconRight,
  iconLeft,
  ...props
}) {
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export function PrimaryButton({ children, onClick, className, ...props }) {
  return (
    <Button className='btn__secondary' onClick={onClick} {...props}>
      {children}
    </Button>
  );
}
