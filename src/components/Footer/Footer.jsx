import { Link } from "react-router-dom";
import {
  ExpertLinks,
  HomePageLinks,
  OrganizationsLinks,
} from "../../data/FooterLinks";
import Logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto mb-8 lg:mb-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-semibold leading-8 lg:leading-[3rem] text-2xl lg:text-4xl">
            Rejoignez notre communauté et aidez-nous à construire la première
            plateforme de networking en ligne à destination du marché africain!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center my-8 lg:my-24">
          <button className="px-6 lg:px-14 py-3 lg:py-4 border border-gray-400 rounded-full mb-4 lg:mb-0">
            Se connecter
          </button>
          <button className="px-6 lg:px-14 py-3 lg:py-4 border border-gray-400 rounded-full">
            Créer un compte
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-4 mb-8 lg:mb-0">
            <h3 className="text-xl uppercase font-medium">
              Page d&apos;accueil
            </h3>
            <ul className="flex flex-col gap-2 lg:gap-4 list-disc pl-4">
              {HomePageLinks.map((item, index) => (
                <li key={index}>
                  <Link to="#" className="text-sm lg:text-base">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 mb-8 lg:mb-0">
            <h3 className="text-xl uppercase font-medium">pour les EXPERTS</h3>
            <ul className="flex flex-col gap-2 lg:gap-4 list-disc pl-4">
              {ExpertLinks.map((item, index) => (
                <li key={index}>
                  <Link to="#" className="text-sm lg:text-base">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 mb-8 lg:mb-0">
            <h3 className="text-xl uppercase font-medium">
              pour les organisations en Afrique
            </h3>
            <ul className="flex flex-col gap-2 lg:gap-4 list-disc pl-4">
              {OrganizationsLinks.map((item, index) => (
                <li key={index}>
                  <Link to="#" className="text-sm lg:text-base">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 mb-8 lg:mb-0">
            <h3 className="text-xl uppercase font-medium">Contact</h3>
            <ul className="flex flex-col gap-2 lg:gap-4 list-disc pl-4">
              <li>
                <Link to="#" className="text-sm lg:text-base">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-4 lg:mx-8 items-center text-center">
        <img src={Logo} alt="FooterLogo" className="" />
        <p className="text-sm lg:text-base">© 2022 Tous droits réservés</p>
        <div className="flex gap-4">
          <FaFacebookF className="text-xl lg:text-2xl" />
          <FaLinkedinIn className="text-xl lg:text-2xl" />
          <FaTwitter className="text-xl lg:text-2xl" />
        </div>
      </div>
    </>
  );
};

export default Footer;
