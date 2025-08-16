export const Button = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2.5 rounded-xl font-semibold text-white 
                 bg-gradient-to-r from-indigo-600 to-blue-500 
                 shadow-md hover:shadow-lg hover:scale-105 
                 active:scale-95 transition-all duration-300 ease-in-out"
    >
      {label}
    </button>
  );
};
