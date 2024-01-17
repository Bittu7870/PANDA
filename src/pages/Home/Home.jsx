import NavBar from "../../components/NavBar/NavBar";
import BannerImg1 from "../../assets/empty-floor-front-modern-building 1.png";
import BannerImg2 from "../../assets/empty-floor-front-modern-building 2.png";
import { MissionsData } from "../../data/MissionsData";
import { Functionality } from "../../data/Functionality";
import { Jobs } from "../../data/Jobs";
import Circle from "../../assets/Rectangle 111.png";
import Vector1 from "../../assets/Vector1.svg";
import Vector2 from "../../assets/Vector2.png";
import Vector3 from "../../assets/Vector3.png";
import Dot from "../../assets/Ellipse 13.svg";
import Expert1 from "../../assets/developer-working-with-app-his-workplace 1.png";
import Expert2 from "../../assets/black-woman-city 1.png";
import Expert3 from "../../assets/vertical-close-up-portrait-young-cheerful-arab-businessman-formal-attire 1.png";
import Organizations from "../../assets/Organizations.png";
import Organizations2 from "../../assets/Organizations1.png";
import Organizations3 from "../../assets/Organizations3.png";
import Img1 from "../../assets/alex-perri-At__1.png";
import Img2 from "../../assets/image 75.png";
import TestimonialImg from "../../assets/image 76.png";
import FounderImg1 from "../../assets/Rectangle 97.png";
import FounderImg2 from "../../assets/Rectangle 98.png";
import ActivityImg from "../../assets/agri.png";
import Star from "../../assets/Union.svg";
import { ActivityList } from "../../data/ActivityList";
import Footer from "../../components/Footer/Footer";

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
            <img src={Vector1} alt="img" className="absolute top-0 left-28" />
            <img src={Vector2} alt="img" className="absolute top-40 left-6" />
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
      {/* End Functionality Section */}

      {/* Expert section */}
      <div className="container flex mx-auto items-center justify-center mb-28 ">
        {/* Left Column */}
        <div className="flex flex-col max-w-80 justify-between mr-8 -mt-36">
          {/* Section Title */}
          <div className="flex gap-6 items-center mb-10">
            <div className="border-b-4 max-w-12 p-9 border-gray-400 mr-2"></div>
            <div className="border-b-4 max-w-12 p-9 border-gray-400 mr-2"></div>
            <div className="border-b-4 max-w-12 p-9 border-gray-400"></div>
          </div>

          {/* Section Content */}
          <div className="text-center">
            <p className="text-5xl font-semibold">Découvrez les experts</p>
          </div>

          <div className="text-center mt-80">
            <p className="text-start">
              Connectez-vous avec des organisations africaines, postulez au job
              de vos rêves en Afrique ou partagez votre expertise même à
              distance!
            </p>
            <button className="mt-10 w-full py-4 border-[2px] border-black rounded-full font-medium">
              Voir tout
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col ml-8">
          {/* Testimonial */}
          <div className="mb-8 text-center">
            <p className="text-4xl font-semibold">
              “Mon rêve était d’aller vivre en Afrique. J&apos;ai postulé à une
              offre d&apos;emploi pour le poste de web developer publiée sur
              PANDA et le mois suivant je commençais à travailler à Dakar!”
            </p>
            <p className="mt-4 mr-28 text-xl text-[#A95454] text-right">
              Omar Ndiaye
            </p>
          </div>

          {/* Expert Images */}
          <div className="flex flex-col sm:flex-row md:flex-row gap-8 mt-auto items-center ml-12">
            <img
              src={Expert1}
              alt="Expert 1"
              className="rounded-t-full w-full h-[300px] md:w-[400px] md:h-[600px] object-cover"
            />
            <img
              src={Expert2}
              alt="Expert 2"
              className="-mb-[147px] grayscale  rounded-t-full w-full md:w-[300px] h-[300px] md:h-[450px] object-cover "
            />
            <img
              src={Expert3}
              alt="Expert 3"
              className="-mb-[275px] grayscale rounded-t-full w-full md:w-[220px] h-[250px] md:h-[320px]"
            />
          </div>
        </div>
      </div>
      {/* End Expert section */}

      {/* Organizations section */}
      <div className="container flex mx-auto items-center justify-center mb-48">
        {/* Left Column */}
        <div className="flex flex-col">
          {/* Testimonial */}
          <div className="mb-8 text-center">
            <p className="text-4xl text-start font-semibold">
              “PANDA nous donne accès aux meilleurs talents dans leur domaine
              d&apos;activité et à de réelles perspectives de collaboration! ”
            </p>
            <p className="mt-4 mr-28 text-xl text-[#A95454] text-start ">
              LGB Company
            </p>
          </div>

          {/* Organizations Images */}
          <div className="flex flex-col sm:flex-row md:flex-row gap-10  mt-auto items-center justify-end mr-16 ">
            <img
              src={Organizations2}
              alt="Expert 3"
              className="-mb-[240px] rounded-t-full w-full md:w-[220px] h-[250px] md:h-[320px] object-cover"
            />

            <img
              src={Organizations}
              alt="Expert 2"
              className="-mb-[110px] rounded-t-full w-full md:w-[300px] h-[300px] md:h-[450px] object-cover "
            />
            <img
              src={Organizations3}
              alt="Expert 1"
              className="rounded-t-full w-full h-[300px] md:w-[400px] md:h-[560px] object-cover"
            />
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col max-w-80 justify-between mr-8">
          {/* Section Title */}
          <div className="flex gap-6 items-center mb-10">
            <div className="border-b-4 max-w-12 px-9 border-gray-400 mr-2"></div>
            <div className="border-b-4 max-w-12 px-9 border-gray-400 mr-2"></div>
            <div className="border-b-4 max-w-12 px-9 border-gray-400"></div>
          </div>

          {/* Section Content */}
          <div className="text-center">
            <p className="text-5xl font-semibold">
              Découvrez les organisations en Afrique
            </p>
          </div>

          <div className="text-center mt-80">
            <p className="text-start">
              Trouvez les experts que vous recherchez, publiez vos offres
              d&apos;emploi et d&apos;autres contenus exclusifs sur votre
              organisation!
            </p>
            <button className="mt-10 w-full py-4 border-[2px] border-black rounded-full font-medium">
              Voir tout
            </button>
          </div>
        </div>
      </div>
      {/* End Organizations section */}

      {/* Jobs section */}
      <div className="container m-auto flex flex-col md:flex-row lg:flex-row items-center mb-48">
        {/* Left section */}
        <div className="flex flex-col max-w-[400px] justify-between mb-8 md:mr-8">
          {/* Section Content */}
          <div className="text-center mt-12">
            <p className="text-5xl font-semibold">Offres d&apos;emploi</p>
          </div>

          <div className="text-center mt-96 ">
            <p className="text-start">
              Publiez les offres d&apos;emploi au sein de votre organisation
              auprès de notre communauté d&apos;experts! Expert à la recherche
              d&apos;un emploi en Afrique? Trouvez le job de vos rêves!
            </p>
            <button className="mt-4 w-full py-4 border-[2px] border-black rounded-full font-medium">
              Publier ou postuler à une offre d&apos;emploi
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ml-10">
          {Jobs.map((item, index) => (
            <div
              key={index}
              className="border rounded-[100px] p-6 text-center mb-8 md:mb-0"
            >
              <p className="text-2xl font-bold">{item.title}</p>
              <p className="text-xl text-[#A95454]">{item.subTitle}</p>
              <div className="flex flex-col md:flex-row lg:flex-row gap-8 mt-12 mb-12 items-center">
                <div className="text-center md:text-left lg:text-left">
                  <p className="font-semibold text-xl text-[#A95454]">
                    {item.time}
                  </p>
                  <p className="underline text-xl">{item.fab}</p>
                </div>
                <div className="text-center m-auto">
                  <img
                    src={item.logo}
                    alt="img"
                    className="w-16 h-14 mb-4 flex m-auto rounded-full"
                  />
                  <p className="font-bold text-md">{item.logoTitle}</p>
                </div>
                <p className="text-xl">{item.day}</p>
              </div>
              <button className="text-xl py-4 px-14 border-2 border-black rounded-full">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* End Jobs section */}

      {/* Events section */}
      <div className="container m-auto flex flex-col md:flex-row lg:flex-row justify-center gap-8 mb-48">
        {/* Left section */}
        <div className="grid gap-6 flex-1 flex-col max-w-[400px] mr-8">
          <div className="flex gap-6 items-center mb-4">
            <div className="border-b-4 max-w-12 px-9 border-gray-400 mr-2"></div>
            <div className="border-b-4 max-w-12 px-9 border-gray-400 mr-2"></div>
            <div className="border-b-4 max-w-12 px-9 border-gray-400"></div>
          </div>
          <p className="text-4xl md:text-6xl font-semibold">
            Événements à venir
          </p>
          <p>Publié par : Pablo Diahuno</p>
          <img src={Img1} alt="img" className="rounded-full mt-4" />
          <p className="mt-4">
            Sortez votre carnet d&apos;adresses ! Restez informés de tous les
            événements à venir autour du business en Afrique organisés en
            Afrique ou à l&apos;étranger.
          </p>
          <button className="mt-4 py-4 px-6 border-2 rounded-full">
            Publier ou voir les événements
          </button>
        </div>

        {/* Right section */}
        <div className="flex-1 pt-4 flex flex-wrap justify-center items-center gap-12  text-center">
          <img
            src={Img2}
            alt="Img2"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-[500px] lg:h-[500px]"
          />
          <div className="-mt-96 ">
            <p>
              L&apos;événement :{" "}
              <span className="text-[#A95454]">The Nancy party’s</span>
            </p>
            <p>
              Date : <span className="text-[#A95454]">10/07/22</span>
            </p>
            <p>
              Lieu : <span className="text-[#A95454]">Senegal</span>
            </p>
          </div>
        </div>
      </div>
      {/* End Events section */}

      {/* Testimonials section */}
      <div className="container mx-auto flex justify-between mb-48">
        <div className="flex-1 grid">
          <p className="text-6xl font-bold">Témoignages</p>
          <p>
            Diaspora Member: <br />
            <span className="text-sm text-[#A95454]">Artur Luison</span>
          </p>
          <p>
            Job Position: <br />
            <span className="text-sm text-[#A95454]">Manager</span>
          </p>
          <p className="max-w-80 text-justify ">
            “Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
            volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut
            pulvinar orci.”
          </p>
        </div>
        <div className="flex-1 grid px-10">
          <img
            src={TestimonialImg}
            alt="TestimonialImg"
            className="rounded-full"
          />
        </div>
        <div className="flex-1 grid ">
          <div className="flex gap-6 items-center mb-4">
            <div className="border-b-4 max-w-12 px-9 border-gray-400 mr-2"></div>
            <div className="border-b-4 max-w-12 px-9 border-gray-400 mr-2"></div>
            <div className="border-b-4 max-w-12 px-9 border-gray-400"></div>
          </div>
          <p className="font-bold text-xl max-w-96">
            Very Nice Atmosphere and experience with “Welcome to PANDA”
          </p>
          <p className="max-w-96 text-justify ">
            Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
            volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut
            pulvinar orci.
          </p>
          <p className="max-w-96 text-justify ">
            Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
            volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut
            pulvinar orci.
          </p>
        </div>
      </div>
      {/* End Testimonials section */}

      {/* Founders section */}
      <div className="container m-auto mb-48">
        <p className="text-6xl font-bold">Les fondateurs</p>
        <div className="flex gap-80 mt-20 ">
          <div className="flex gap-8">
            <div>
              <img src={FounderImg1} alt="" className="rounded-t-full mb-2 " />
              <p>
                Diaspora Member: <br />
                <span className="text-sm text-[#A95454]">Artur Luison</span>
              </p>
            </div>
            <div>
              <img src={FounderImg2} alt="" className="rounded-t-full mb-2 " />
              <p>
                Diaspora Member: <br />
                <span className="text-sm text-[#A95454]">Artur Luison</span>
              </p>
            </div>
          </div>
          <div className="grid border rounded-t-full px-8 pt-10 items-center  ">
            <p className="lg:w-80 text-justify text-sm">
              “ Sarah et Abdoulaye sont tous deux consultants et managers dans
              un groupe international de conseil en stratégie et management. Ils
              se sont rencontrés au Luxembourg et ont beaucoup échangé sur leur
              expérience commune dans l&apos;entrepreneuriat. Tout au long de
              leurs discussions, une chose très claire est vite apparue : leur
              passion pour l&apos;entrepreneuriat et leur amour de
              l&apos;Afrique, le continent dont ils sont tous deux originaires.
              “
            </p>
            <p className="lg:w-80 text-justify text-sm">
              Ils sont alors convaincus qu&apos;ils peuvent répondre à un besoin
              critique en Afrique et avoir un réel impact en réunissant des
              experts de premier plan du monde entier pour collaborer avec des
              acteurs africains sur des projets visant à faire croître
              l&apos;écosystème de l&apos;innovation en Afrique.
            </p>
          </div>
        </div>
      </div>
      {/* End Founders section */}

      {/* Our Goal section */}
      <div className="container mx-auto flex justify-center items-center mb-8 lg:mb-48">
        <div className="max-w-5xl">
          <p className="font-semibold text-center leading-8 lg:leading-[3rem] text-2xl lg:text-4xl">
            “Notre objectif est de capturer et partager les connaissances, les
            expertises et les réseaux afin de créer des opportunités illimitées,
            que ce soit pour les acteurs africains à la recherche des meilleures
            talents pour développer leurs activités ou pour les experts du monde
            entier qui souhaitent lancer des projets innovants en Afrique.”
          </p>
          <p className="text-sm text-[#A95454] text-end mt-4">
            Sarah et Abdoulaye
          </p>
        </div>
      </div>
      {/* End Our Goal section */}

      {/* Activity section */}
      <div className="container mx-auto mb-48 lg:mb-48">
        <p className="text-4xl lg:text-6xl font-semibold max-w-2xl lg:max-w-[980px]">
          Top 5 des domaines d’activités porteurs en Afrique
        </p>
        <div className="flex  justify-between flex-col lg:flex-row items-center mt-6">
          <img
            src={ActivityImg}
            alt="ActivityImg"
            className="rounded-full ml-36 mt-12  mb-4 lg:mb-0 lg:mr-8"
          />
          <div className="grid max-w-auto space-y-12">
            <div className="flex gap-6 items-center mb-4">
              <div className="border-b-4 max-w-12 px-9 border-gray-400"></div>
              <div className="border-b-4 max-w-12 px-9 border-gray-400"></div>
              <div className="border-b-4 max-w-12 px-9 border-gray-400"></div>
              <div className="border-b-4 max-w-12 px-9 border-gray-400"></div>
            </div>
            <div className="space-y-12 ">
              {ActivityList.map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <img src={Star} alt="Star" className="w-10 h-10" />
                  <p
                    className={`font-semibold text-lg lg:text-4xl ${
                      item === "L'agro-alimentaire" ? "text-[#A95454]" : ""
                    }`}
                  >
                    {item}
                  </p>
                </div>
              ))}
              <button className="items-center text-center border-2 border-gray-500  rounded-full py-4 px-14">
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* End Activity section */}

      {/* Footer section */}
      <Footer />
      {/* End Footer section */}
    </div>
  );
};

export default Home;
