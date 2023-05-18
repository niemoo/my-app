import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="bg-emerald-400 h-screen">
      <div className="flex flex-col gap-5 items-center justify-center h-full text-white">
        <h1 className="font-bold text-9xl">404</h1>
        <h2 className="font-medium text-2xl">Sorry, page not found</h2>
        <Link className="text-slate-200 font-medium hover:underline" to="/">
          Back To Home Page
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
