import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password "
          label="password "
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4 capitalize">
          <SubmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block capitalize"
        >
          guest user
        </button>
        <p className="text-center">Not a member yet?</p>
        <Link
          to="/register"
          className="ml-2 link link-hover link-primary  text-center"
        >
          <button className="btn capitalize btn-block">register</button>
        </Link>
      </Form>
    </section>
  );
};

export default Login;
