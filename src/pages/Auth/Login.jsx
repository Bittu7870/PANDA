import { useState } from "react";
import IMG from "../../assets/group-afro-americans-working-together.png";
import STAR from "../../assets/Union.svg";
import SignIn from "../../components/Auth/SignIn";

const Login = () => {
  const TabName = ["Join PANDA", "Sign in"];
  const [currentTab, setCurrentTab] = useState(TabName[0]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConformPassword = () => {
    setShowConformPassword(!showConformPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

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

    console.log("formData:", email, password, conformPassword);
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
                className={`text-black text-2xl font-sans pb-4 cursor-pointer ${
                  currentTab === tab
                    ? "border-b-4 transition-all duration-300  border-b-[#A95454]"
                    : ""
                }`}
                onClick={() => setCurrentTab(tab)}
              >
                {tab}
              </p>
              {index !== TabName.length - 1 && (
                <p className="text-gray-500 text-2xl font-sans pb-4 px-6">or</p>
              )}
            </div>
          ))}
        </div>

        {/* Registration Form */}
        {currentTab === "Join PANDA" ? (
          <>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center items-center p-3 w-full sm:w-[800px]">
                <div className="items-center text-center w-full sm:w-[680px] sm:h-[570px] border rounded-t-full px-8 py-10 ">
                  <div className="flex justify-center items-center mt-8 mb-8">
                    <img src={STAR} alt="starIMG" className="w-12" />
                  </div>
                  <div className="mb-8">
                    <p className="text-4xl font-bold">
                      Create your free account
                    </p>
                    <p className="text-3xl mt-2 text-center font-bold">
                      Takes less than{" "}
                      <span className="text-[#A95454] text-2xl font-bold">
                        5 minutes...
                      </span>
                    </p>
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

                  {/* Confirm Password Input */}
                  <div className="mb-4 relative">
                    <input
                      type={showConformPassword ? "text" : "password"}
                      name="password"
                      value={conformPassword}
                      placeholder="Confirm Password"
                      onChange={(e) => setConformPassword(e.target.value)}
                      className="w-full border-b-2 p-3 mt-2 focus:outline-none focus:border-[#A95454] transition-all duration-300"
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
                </div>
              </div>

              <div className="items-center text-center">
                <div className="flex flex-col gap-3 mt-3 mb-3 items-center">
                  <div className="flex items-center -ml-36 gap-3">
                    <input
                      id="checkbox"
                      type="checkbox"
                      style={{ width: "2em", height: "1.9em" }}
                      className="ml-1 cursor-pointer"
                      required
                    />
                    <label htmlFor="checkbox">
                      <p className="text-xl cursor-pointer">I’m an Expert</p>
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={STAR} alt="starIMG" className="border w-8 " />
                    <p className="text-xl">I’m an Organization in Africa</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="py-4 px-8 text-xl mt-6 mb-6 border hover:text-white hover:bg-[#A95454] transition-all duration-300 rounded-full"
                >
                  Join PANDA
                </button>
              </div>
            </form>
            {/* Terms of Use */}
            <div>
              <p className="text-xl max-w-lg flex m-3 items-center  text-gray-500">
                By clicking on &quot;Create an account&quot;, you agree to our
              </p>
              <p className="text-xl text-gray-500 items-center text-center">
                <a href="" className="underline">
                  terms of use
                </a>{" "}
                {""} {""}and <a className="underline">privacy policy</a>
                {""}.
              </p>
            </div>
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </div>
  );
};

export default Login;
