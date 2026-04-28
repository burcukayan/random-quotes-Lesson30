export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const colorClasses = {
    primary: "btn-primary text-white",
    error: "btn-error text-white",
    ghost: "btn-ghost",
  };

  const selectedColor = colorClasses[variant] || colorClasses.primary;

  return (
    <button className={`btn ${selectedColor} ${className}`} {...props}>
      {children}
    </button>
  );
}
