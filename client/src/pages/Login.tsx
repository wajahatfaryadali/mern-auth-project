import { Link, useNavigate } from "react-router-dom";
import { URL_HOME, URL_SIGN_UP } from "../routes/RoutesConstants";
import { ChangeEvent, SyntheticEvent, useState } from "react";

interface SignInStateInterface {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<SignInStateInterface>({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (form.email && form.password) {
      // POST request using fetch inside useEffect React hook
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      };

      const resp = await fetch("/api/auth/signin", requestOptions);

      if (resp.ok) {
        console.log("good to go");
        navigate(URL_HOME);
      } else {
        window.alert("error while sign in ");
      }
    } else {
      window.alert("Please fill all fields!");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="flex min-[80%] flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-[#006f00b3] hover:text-[#006f00c9]">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={form.password}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#006f00b3] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#006f00c9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account{" "}
          <Link to={`${URL_SIGN_UP}`} className="text-blue-500 text-[#006f00b3] underline font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
