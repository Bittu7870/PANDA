import { useState } from "react";
import STAR from "../../assets/Union.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Validate email
    if (!email) {
      errors.email = "Please enter a valid email address.";
    }

    // Validate password

    if (!password) {
      errors.password = "Enter a valid password";
    }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const storedToken = JSON.parse(localStorage.getItem("userData"));
      console.log(email, storedToken.email);
      if (
        storedToken &&
        email === storedToken.email &&
        password === storedToken.password
      ) {
        toast.success("Sign in successfully");
        navigate("/home");
      } else {
        toast.error("Invalid email or password");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center p-3 w-full sm:w-[800px]">
          <div className="items-center text-center w-full sm:w-[680px] sm:h-[570px] border rounded-t-full px-8 py-24">
            <div className="flex justify-center items-center mt-8 mb-8">
              <img src={STAR} alt="starIMG" className="w-12" />
            </div>
            <div className="mb-8">
              <p className="text-5xl font-bold">Sign in</p>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b-2 p-3 mt-2 focus:outline-none focus:border-[#A95454] transition-all duration-300"
              />
              <span className="text-gray-400 block text-left mt-1">
                {formErrors.email}
              </span>
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b-2 p-3 mt-2 focus:outline-none focus:border-[#A95454] transition-all duration-300"
              />
              <p
                className="absolute top-3 right-4 cursor-pointer hover:border-b-[3px] font-bold"
                onClick={handleShowPassword}
              >
                Show
              </p>
              <span className="text-gray-400 block text-left mt-1">
                {formErrors.password}
              </span>
            </div>

            <div className="text-left mt-8">
              <Link to="/forget-password" className="underline">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>

        <div className="items-center text-center">
          <button
            type="submit"
            className="py-4 px-8 text-xl mt-6 mb-6 border hover:text-white hover:bg-[#A95454] transition-all duration-300 rounded-full"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
