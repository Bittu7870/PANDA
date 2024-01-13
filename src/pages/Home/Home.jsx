import NavBar from "../../components/NavBar/NavBar";
import BannerImg1 from "../../assets/empty-floor-front-modern-building 1.png";
import BannerImg2 from "../../assets/empty-floor-front-modern-building 2.png";

const Home = () => {
  return (
    <div className="bg-[#F5F1ED] pb-8">
      {/* Navbar section */}
      <NavBar />

      {/* Banner section */}
      <div className="container mx-auto py-16">
        <p className="text-6xl font-bold text-center mb-8">
          Nous réunissons experts du monde entier et organisations en Afrique
        </p>

        <div className="flex flex-col-reverse gap-10 md:flex-row justify-center mx-12">
          <div className="flex-1 max-w-md opacity-75 pt-12">
            <h3 className="text-[#A95454] text-4xl font-bold mb-4">
              Organisations en Afrique
            </h3>
            <p className="text-gray-600">
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

          <div className="flex-1 max-w-md ml-16 opacity-75 pt-12">
            <h3 className="text-[#A95454] text-4xl font-bold mb-4">Experts</h3>
            <p className="text-gray-600 text-xl text-justify">
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
    </div>
  );
};

export default Home;
