const variants = {
  green: "bg-green-500 hover:bg-green-600",
  blue: "bg-blue-600 hover:bg-blue-700",
  red: "bg-red-500 hover:bg-red-600",
};

function Button({ children, onClick, variant = "green" }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-white rounded cursor-pointer ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
