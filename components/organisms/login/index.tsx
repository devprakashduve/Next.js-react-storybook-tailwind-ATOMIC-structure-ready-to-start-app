import React, { useState } from "react";
import { FaceSmileIcon, FaceFrownIcon } from "@heroicons/react/24/outline";
import Img from "../../atoms/img";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Submit login request
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (email.trim() === "") {
      errors.email = "Email is required";
    }
    if (password.trim() === "") {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md sm:w-full md:w-full/2 py-8 bg-white">
        <Img
          src={"/images/logingPage.jpg"}
          alt={"image"}
          classes="filter blur-sm"
        />
      </div>
      <div className="max-w-md sm:w-full md:w-full/2 px-5 py-5 bg-white">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="my-5">
              <label className="text-lg mt-2 mb-2">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email address"
                className={`appearance-none border ${
                  errors.email ? "border-red-500" : "border-gray-400"
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 mb-2">{errors.email}</p>
              )}
            </div>
            <div className="my-5">
              <label className="text-lg mt-2 mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
                className={`appearance-none border ${
                  errors.password ? "border-red-500" : "border-gray-400"
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-2 mb-2">
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-lime-600 focus:ring-lime-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-lime-600 hover:text-lime-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-500 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mt-6">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-lime-600 hover:text-lime-500"
            >
              Don't have an account?
            </a>
          </div>
        </div>

        <div className="mt-8">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-6">
            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
              >
                <span className="sr-only">Sign in with Facebook</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 2H2a2 2 0 00-2 2v14a2 2 0 002 2h8.43v-6.27H9.29v-2.44h1.14V8.72c0-1.13.69-1.74 1.68-1.74.48 0 .89.04 1.01.06v1.16l-.7.01c-.54 0-.64.26-.64.63v.83h1.27l-.17 2.44h-1.1v6.27A2 2 0 0018 18v-14z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
              >
                <span className="sr-only">Sign in with Twitter</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M19.16 5.05a.53.53 0 00-.85-.23L14.52 8.2a.53.53 0 01-.68 0l-1.94-1.57a.53.53 0 00-.63 0L8.98 8.2a.53.53 0 01-.68 0l-3.79-3a.53.53 0 00-.85.23 6.42 6.42 0 000 6.61l3.8 3a.53.53 0 01.67 0l1.95 1.57a.53.53 0 00.63 0l1.94-1.57a.53.53 0 01.68 0l3.8 3a.53.53 0 00.85-.23 6.42 6.42 0 000-6.61z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
