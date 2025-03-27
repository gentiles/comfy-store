import React from "react";
import { useRouteError, Link } from "react-router-dom";
const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl text-primary font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn't find the page you're looking for
          </p>
        </div>
        <div>
          <Link to="/" className="btn btn-primary">
            Go back home
          </Link>
        </div>
      </main>
    );
  }
  return (
    <h1 className="text-4xl grid min-h-[100vh] place-items-center">
      there was an error...
    </h1>
  );
};

export default Error;
