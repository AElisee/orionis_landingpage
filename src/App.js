import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Service from "./components/Service";
import { teamMemeber } from "./data/team";
import { technos } from "./data/technos";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home">
      <header className="relative">
        <Navbar />
        <div className="container flex flex-aic flex-jcc max_w-h">
          <h2 className="text-uppercase text-center">
            une autre vision - une autre solution
          </h2>
        </div>
        <div className="mouse absolute">
          <img src="./images/mouse.svg" alt="" />
        </div>
      </header>
      <About />
      <section id="choise">
        <div className="section-title">
          <h3 data-aos="zoom-out-right">POURQUOI NOUS CHOISIR ?</h3>
        </div>

        <div className="container">
          <div>
            <div
              className="item item-1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="circle">
                <img src="./images/image3.svg" alt="" />
              </span>
              <p className="txt">
                Plus de 90% de nos clients sont des clients fidèles !
              </p>
            </div>

            <div
              className="item item-2"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <span className="circle">
                <img src="./images/image4.svg" alt="" />
              </span>
              <p className="txt">
                Communications faciles. Nous parlons 2 langues : Français,
                anglais.
              </p>
            </div>

            <div
              className="item item-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="circle">
                <img src="./images/image5.svg" alt="" />
              </span>
              <p className="txt">Nos développeurs sont dévoués et innovants</p>
            </div>

            <div
              className="item item-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="circle">
                <img src="./images/image6.svg" alt="" />
              </span>
              <p className="txt">Bureaux : Abidjan, Côte d’Ivoire</p>
            </div>

            <div
              className="item item-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="circle">
                <img src="./images/image7.svg" alt="" />
              </span>
              <p className="txt">+30 développeurs, PMS, PR, ventes, RH</p>
            </div>
          </div>
        </div>
      </section>

      <Service />
      <section className="ext-service flex">
        <div className="left flex-1">
          <div className="section-title">
            <h3 data-aos="zoom-out-right">EXTERNALISATIONS DES SERVICES</h3>
          </div>
          <p data-aos="fade-left" data-aos-duration="2000">
            Nous excellons dans la constitution d'une équipe de développement en
            fonction de vos exigences techniques. Notre gestion des ressources
            humaines recherchera et embauchera les meilleurs programmeurs et
            concepteurs, chaque nouvel employé a un entretien avec des experts
            techniques seniors. L'équipe peut être facilement redimensionnée
            pour exécuter le projet efficacement.
          </p>
        </div>
        <div
          className="right flex-1"
          data-aos="flip-left"
          data-aos-duration="1000"
        ></div>
      </section>

      <section className="work-process">
        <div className="section-title">
          <h3 data-aos="zoom-out-right">NOTRE PROCESSUS DE TRAVAIL</h3>
        </div>
        <div className="container" data-aos="zoom-in-up">
          <img src="./images/process.svg" alt="" />
        </div>
      </section>
      <section className="technos">
        <div className="section-title">
          <h3 data-aos="zoom-out-right">NOS TECHNOLOGIES</h3>
        </div>
        <div className="container  flex">
          {technos.map((techno, index) => (
            <div
              className="techno"
              key={index}
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <div className="img-ctn flex flex-aic flex-jcc">
                <img src={techno?.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="team">
        <div className="section-title">
          <h3 data-aos="zoom-out-right">NOTRE EQUIPE</h3>
        </div>
        <div className="container flex">
          {teamMemeber.map((member, index) => (
            <div
              key={index}
              className="member  "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="photo-name ">
                <div className="photo-ctn flex flex-aic flex-jcc">
                  <img src={member.photo} alt="" />
                </div>
                <h3 className="relative">
                  {member?.firstName} <strong>{member?.name}</strong>
                </h3>
              </div>
              <div className="bio">
                <p>{member?.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="f-container">
          <div className="f-top">
            <div className="desc">
              <div className="logo">
                <img src="./images/logo_orionis.png" alt="" />
              </div>
              <p>
                ORIONIS COTE D'IVOIRE - Mall Z4 7ème étage, 4 Rue Paul Langevin,
                Abidjan Côte d'Ivoire
              </p>

              <p>
                Capital : 600.000.000 FCFA. RCCM : CI-ABJ-03-2019-B14-09769 • CC
                : 1926349 G • Tél : (+225) 27 21 51 9062 • BP 2709 ABJ 06
              </p>
              <p>www.orionisci.com • Info@orionisci.com</p>
            </div>
          </div>
          <div className="f-bottom" id="contactUs">
            <p>Contactez-nous dès aujourd'hui</p>
            <div className="ctn">
              <div className="elt">
                <span className="icon">
                  <img src="./images/map-pin.svg" alt="" />
                </span>
                <span>Marcory Zone 4, LE MALL Z4</span>
              </div>
              <div>
                <span className="icon">
                  <img src="./images/phone.svg" alt="" />
                </span>
                <span>(+225) 27 21 51 9062</span>
              </div>
              <div>
                <span className="icon">
                  <img src="./images/world-www.svg" alt="" />
                </span>
                <span>www.orionisci.com</span>
              </div>
              <div>
                <span className="icon">
                  <img src="./images/mail.svg" alt="" />
                </span>
                <span>info@orionis.com</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
