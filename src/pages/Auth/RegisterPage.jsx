import { useState } from "react";
import IMG from "../../assets/group-afro-americans-working-together.png";
import SignIn from "../../components/Auth/SignIn";
import SignUp from "../../components/Auth/SignUp";

const RegisterPage = () => {
  const TabName = ["Join PANDA", "Sign in"];
  const [currentTab, setCurrentTab] = useState(TabName[0]);

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
          <SignUp currentTab={setCurrentTab} />
        ) : (
          <SignIn />
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
