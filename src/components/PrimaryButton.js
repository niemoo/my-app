function PrimaryButton({ className, children }) {
  return <button className={`bg-red-500 py-2 text-white font-medium rounded hover:bg-pink-600 transition ${className}`}>{children}</button>;
}

export default PrimaryButton;
