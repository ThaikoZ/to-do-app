import { FormEvent, useRef, useState } from "react";
import axiosInstance from "../services/api-client";
import { useNavigate } from "react-router-dom";

interface Token {
  access: string;
  refresh: string;
}

const SignInPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usernameValue = usernameRef.current!.value;
    const passwordValue = passwordRef.current!.value;

    const payload = { username: usernameValue, password: passwordValue };
    console.log(payload);

    axiosInstance
      .post<Token>("auth/jwt/create/", payload)
      .then((res) => {
        localStorage.setItem("session_token_refresh", res.data.refresh);
        localStorage.setItem("session_token_access", res.data.access);
        navigate("/tasks");
      })
      .catch((err) => {
        console.log(err);
        const result = err.response.data.detail;
        console.log(result);
        setError(result);
      });
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            // action="#"
            // method="POST"
            onSubmit={onSubmitHandle}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  ref={usernameRef}
                  autoComplete="username"
                  required
                  className="ps-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  ref={passwordRef}
                  className="ps-3  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {error && (
              <p className=" text-center text-rose-500 py-0">{error}</p>
            )}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="./register"
              className="font-semibold leading-6 text-primary-600 hover:text-primary-500"
            >
              Create a new account
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
