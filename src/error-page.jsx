import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const { status, error, statusText } = useRouteError();

  return (
    <div id="error-page">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p>
        `<i className="text-red-500">{error.message}</i>``
      </p>
      <p className="text-xl font-semibold">
        {status} || {statusText}
      </p>
      <Link
        to={"/"}
        className="border border-orange-400 hover:bg-orange-600 hover:text-white py-2 px-5 rounded-md"
      >
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
