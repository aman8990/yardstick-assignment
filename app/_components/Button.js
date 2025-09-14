function Button({ children, onClick, type, disabled }) {
  return (
    <button
      className="flex justify-center font-semibold bg-gray-600 text-lg rounded-md p-1 w-full cursor-pointer text-gray-200"
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
