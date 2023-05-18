function AuthLayouts(props) {
  return (
    <div className="bg-blue-300 h-screen pt-10">
      <div className="bg-white mx-auto max-w-md p-8 shadow-lg rounded-lg border ">{props.children}</div>
    </div>
  );
}

export default AuthLayouts;
