import { useState } from "react";
import IMG from "../../assets/group-afro-americans-working-together.png";
import STAR from "../../assets/Union.svg";
import { useNavigate } from "react-router";

const ResetPassword = () => {
  const TabName = ["Join PANDA", "Sign in"];
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConformPassword = () => {
    setShowConformPassword(!showConformPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Validate password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      errors.password = "Enter valid password";
    }

    // Validate conform password
    if (!conformPassword) {
      errors.conformPassword = "Conform password should be same as password.";
    } else if (conformPassword !== password) {
      errors.conformPassword = "Passwords do not match.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setEmailSent(true);
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="relative h-full">
        <img
          src={IMG}
          alt="img"
          className="object-cover w-full h-full sm:h-auto"
        />
        <h1 className="absolute top-8 left-5 text-5xl font-bold text-white">
          Welcome to Panda
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center h-full">
        {/* Navigation */}
        <div className="flex gap-4 mb-8 text-center items-center border-b-2 border-[#E0E0E0] mt-5 ">
          {TabName.map((tab, index) => (
            <div key={index} className="flex">
              <p
                className={`text-black text-2xl font-sans pb-4 cursor-pointer`}
                onClick={() => {
                  navigate("/");
                }}
              >
                {tab}
              </p>
              {index !== TabName.length - 1 && (
                <p className="text-gray-500 text-2xl font-sans pb-4 px-6">or</p>
              )}
            </div>
          ))}
        </div>

        {/* Reset password */}
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center p-3 w-full sm:w-[800px]">
            <div className="items-center text-center w-full sm:w-[680px] sm:h-[570px] border rounded-t-full px-8 py-24">
              <div className="flex justify-center items-center mt-8 mb-8">
                <img src={STAR} alt="starIMG" className="w-12" />
              </div>
              <div className="mb-16  ">
                <p className="text-5xl font-bold">Reset password</p>
              </div>

              {/* Password Input */}
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b-2 p-3 mt-2 focus:outline-none text-red-600 focus:border-[#A95454] transition-all duration-300"
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

              {/* Confirm Password Input */}
              <div className="mb-4 relative">
                <input
                  type={showConformPassword ? "text" : "password"}
                  name="password"
                  value={conformPassword}
                  placeholder="Re-enter new password"
                  onChange={(e) => setConformPassword(e.target.value)}
                  className="w-full border-b-2 p-3 mt-2 focus:outline-none text-red-600  focus:border-[#A95454] transition-all duration-300"
                />
                <p
                  className="absolute top-3 right-4 cursor-pointer hover:border-b-[3px] font-bold"
                  onClick={handleShowConformPassword}
                >
                  Show
                </p>
                <span className="text-gray-400 block text-left mt-1">
                  {formErrors.conformPassword}
                </span>
              </div>

              <p className="mt-8 text-left text-gray-500">
                {!emailSent ? "" : "Your password has been reset."}
              </p>
            </div>
          </div>

          <div className="items-center text-center">
            {!emailSent ? (
              <button
                type="submit"
                className="py-4 px-12 text-xl mt-6 mb-6 border hover:text-white hover:bg-[#A95454] transition-all duration-300 rounded-full"
              >
                Reset My Password
              </button>
            ) : (
              <button
                type="submit"
                className="py-4 px-12 text-xl mt-6 mb-6 border hover:text-white hover:bg-[#A95454] transition-all duration-300 rounded-full"
                onClick={() => navigate("/")}
              >
                Sign in
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
