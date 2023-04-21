export function Button({
  children,
  onClick,
  className,
  iconRight,
  iconLeft,
  ...props
}) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export function PrimaryButton({ children, onClick, className, ...props }) {
  return (
    <Button
      className={"bg-emerald-500 hover:bg-emerald-700"}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
}
