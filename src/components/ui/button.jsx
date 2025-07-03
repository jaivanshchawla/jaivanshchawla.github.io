// src/components/ui/button.jsx
export function Button({ children, className = "", onClick, variant = "default" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${className} ${
        variant === "secondary" ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
      }`}
    >
      {children}
    </button>
  );
}
