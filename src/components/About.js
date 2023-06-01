import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialise AOS
  }, []);
  return (
    <section id="about">
      <div className="flex">
        <div className="left flex-1">
          <div className="section-title">
            <h3 data-aos="zoom-out-right">QUI EST ORIONIS ?</h3>
          </div>
          <p
            data-aos="fade-left"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
          >
            <strong>ORIONIS</strong> est une entreprise de service en conseils
            et ingénierie informatique, spécialisée dans la transformation
            digitale et la construction, la conception et la promotion de site
            web et application d’innovante.
          </p>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
          >
            Nous offrons une autre vision de la solution dans les domaines de la
            conception et de la promotion de sites Web respectueux de l'œil et
            de l'environnement à un large éventail d'entreprises et
            d'organisations de notre communauté locale et du monde entier.
          </p>
        </div>
        <div
          className="right flex-1"
          data-aos="flip-left"
          data-aos-duration="1000"
        ></div>
      </div>
    </section>
  );
};

export default About;
