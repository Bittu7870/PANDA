import NavBar from "../../components/NavBar/NavBar";
import BannerImg1 from "../../assets/empty-floor-front-modern-building 1.png";
import BannerImg2 from "../../assets/empty-floor-front-modern-building 2.png";
import { MissionsData } from "../../data/MissionsData";
import { Functionality } from "../../data/Functionality";
import Circle from "../../assets/Rectangle 111.png";
import Vector1 from "../../assets/Vector1.svg";
import Vector2 from "../../assets/Vector2.png";
import Vector3 from "../../assets/Vector3.png";
import Dot from "../../assets/Ellipse 13.svg";

const Home = () => {
  return (
    <div className="bg-[#F5F1ED] pb-8">
      {/* Navbar section */}
      <NavBar />

      {/* Banner section */}
      <div className="container mx-auto">
        <p className="text-6xl font-bold leading-tight text-center mb-8">
          Nous réunissons experts du monde entier et organisations en Afrique
        </p>

        <div className="flex flex-col-reverse gap-10 py-8  md:flex-row justify-center mx-12">
          <div className="flex-1 max-w-md opacity-75 pt-48 items-center">
            <h3 className="text-[#A95454] text-4xl font-bold mb-4">
              Organisations en Afrique
            </h3>
            <p className="text-md text-justify">
              Vous êtes une entreprise privée ou publique basée en Afrique et
              vous avez du mal à recruter des profils expérimentés? Vous êtes
              une start-up africaine et vous souhaitez faire appel aux services
              d&lsquo;un prestataire externe? Vous recherchez une expertise
              spécifique pour réaliser un futur projet? Grâce à son réseau,
              PANDA vous aide à trouver les experts dont vous avez besoin!
            </p>
          </div>

          <div className="relative flex-shrink-0 w-full md:w-1/2">
            <img
              src={BannerImg1}
              alt="img"
              className="w-full h-auto rounded-md"
            />
            <img
              src={BannerImg2}
              alt="img"
              className="absolute top-8 -right-14 w-full h-auto rounded-md"
            />
          </div>

          <div className="flex-1 max-w-md ml-16 opacity-75 items-center pt-48">
            <h3 className="text-[#A95454] text-4xl font-bold mb-4">Experts</h3>
            <p className="text-md text-justify">
              Vous êtes un professionnel expérimenté et vous planifiez de partir
              travailler en Afrique? Vous vous rendez souvent sur le continent
              africain pour des raisons professionnelles et vous souhaitez
              étendre votre réseau? Vous souhaitez partager votre expertise avec
              des organisations africaines sans vous déplacer?
              <br />
              <br />
              PANDA est la plateforme de networking des experts pour la
              réalisation de leurs projets professionnels sur le continent
              africain!
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto my-32">
        <div className="mb-14">
          <p className="text-6xl font-bold">Missions de PANDA</p>
        </div>
        <div className="flex flex-wrap gap-8">
          {MissionsData.map((item, index) => (
            <div
              key={index}
              className="flex-1 max-w-[300px] p-4 border-[1px] border-[#A95454] rounded-t-full"
            >
              <div className="text-center py-4">
                <p>{item.id}</p>
                <p className="text-2xl font-bold my-6">{item.title}</p>
                <p className="text-gray-600 text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Functionality Section */}
      <div className="container mx-auto my-32 flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1">
          <div className="mb-14">
            <p className="text-6xl font-bold">Fonctionnalités</p>
          </div>
          <div className="flex flex-wrap gap-8">
            {Functionality.map((item, index) => (
              <div
                key={index}
                className={`flex-1 max-w-[300px] p-4 border-2 ${
                  index < 3
                    ? "border-t-[#A95454] rounded-t-full"
                    : "border-b-[#A95454] rounded-b-full pb-20 px-4"
                }`}
              >
                <div className="text-center py-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="flex justify-center items-center mx-auto mb-6"
                  />
                  <p className="text-2xl font-bold my-6">{item.title}</p>
                  <p className="">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <div className="mt-36 mb-20 relative">
            <img src={Circle} alt="circle" />
            <img src={Vector1} alt="img" className="absolute top-0 left-28 " />
            <img src={Vector2} alt="img" className="absolute top-40 left-6 " />
            <img
              src={Vector3}
              alt="img"
              className="absolute bottom-24 right-44"
            />
            <img src={Dot} alt="img" className="absolute bottom-36 right-44" />
          </div>
          <button className="px-10 py-4 border-2 border-black rounded-full">
            Explorer la Travel Map
          </button>
        </div>
      </div>

      {/* Slide section */}
    </div>
  );
};

export default Home;
