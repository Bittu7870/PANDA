import { useState } from "react";
import Logo from "../../assets/Group 2528.png";
import { BsList } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { NavBarLinks } from "../../data/NavBarLinks";
import Star from "../../assets/north-star-24.svg";

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleToggleMenu = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div className="pb-16">
      {/* Upper Navbar */}
      <div className="container mx-auto flex items-center justify-between  text-center pt-6 ">
        <div>
          <p>EN - FR</p>
        </div>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="items-center  ">
          <ul className="hidden md:flex gap-4">
            <li className="cursor-pointer underline ">
              <a href="#">Créer un compte</a>
            </li>
            <li className="cursor-pointer underline ">
              <a href="#">Se connecter</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleToggleMenu}>
          <BsList />
        </div>
      </div>

      {/* Sidebar */}
      {showSideBar && (
        <div className="w-[260px] bg-[#F5F1ED] h-screen fixed top-0 right-0 z-50 transition-all duration-200 ">
          <div className="flex justify-end p-4">
            <div
              className="text-4xl text-black cursor-pointer"
              onClick={handleToggleMenu}
            >
              <BiX />
            </div>
          </div>
          <div className="items-center text-center border-2 border-black p-3 m-4 rounded-t-full ">
            <ul className="flex flex-col gap-4 underline p-8 overflow-scroll text-black">
              <li className="cursor-pointer">
                <Link to="/signup">Créer un compte</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/login">Se connecter</Link>
              </li>
              <li className="text-center flex justify-center py-6">
                <img src={Star} alt="star" />
              </li>
              {NavBarLinks.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Lower Navbar */}
      <div className="mt-14">
        {/* NavLinks */}
        <div className="hidden sm:flex-wrap  md:flex items-center justify-center gap-6">
          {NavBarLinks.map((item, index) => (
            <ul key={index} className="text-xl">
              <li>
                <Link to={item.path}>{item.name}</Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
