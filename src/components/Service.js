import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section id="services" className="flex">
        <div className="left flex-1">
          <div className="section-title">
            <h3 data-aos="zoom-out-right">NOS SERVICES</h3>
          </div>
          <div className="l-container">
            <div className="s-item" data-aos="fade-up" data-aos-duration="1000">
              <span
                className="number"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                1
              </span>
              <div className="txt">
                <h4>IDENTIFICATION ET CARACTÉRISATION DE L’ENTREPRISE</h4>
                <p>
                  Nous croyons en l'adaptation du besoin du client à la
                  technologie plutôt que l'inverse. Par conséquent, nous
                  accordons une grande importance à la construction d'une
                  caractérisation approfondie et claire qui couvre tous les
                  besoins de votre site Web
                </p>
                <p>
                  Dans la caractérisation, nous nous référons à tous les détails
                  sur le site. Par exemple, quelles alertes vont La vérification
                  est faite pour éviter les mauvaises surprises au milieu du
                  projet.
                </p>
              </div>
            </div>
            <div className="s-item" data-aos="fade-up" data-aos-duration="1000">
              <span
                className="number"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                2
              </span>
              <div className="txt">
                <h4>CONSEIL AUX ENTREPRISES</h4>
                <p>
                  Nous accompagnons des projets de 0 pour nos clients afin de
                  leur assurer que leur produit sera toujours à la pointe.
                  ORIONIS vous aide à surmonter vos défis technologiques dans un
                  environnement ou la disruption est devenue un risque majeur.
                </p>
              </div>
            </div>
            <div className="s-item" data-aos="fade-up" data-aos-duration="1000">
              <span
                className="number"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                3
              </span>
              <div className="txt">
                <h4>TRANSFORMATION DIGITALE</h4>
                <p>
                  Dans une approche très collaborative, Nous évaluons la
                  maturité digitale de nos clients et les accompagnons dans leur
                  projet de digitalisation de bout en bout. A chaque étape nous
                  sommes présents pour assurer le succès du processus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex-1"></div>
      </section>
      <section className="services flex">
        <div className="left flex-1">
          <div className="l-container">
            <div className="s-item" data-aos="fade-up" data-aos-duration="1000">
              <span
                className="number"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                4
              </span>
              <div className="txt">
                <h4>EXTERNALISATIONS ET OUTSTAFFING</h4>
                <p>
                  Nous pouvons constituer votre équipe de développement afin que
                  vous puissiez vous concentrer et contrôler chaque aspect de
                  votre développement logiciel. Chaque équipe est unique et
                  créée à partir de zéro en fonction de vos exigences et de vos
                  besoins ; l'équipe peut être facilement redimensionnée pour
                  exécuter le projet efficacement. Pas de frais cachés, pas de
                  tracas, seulement l'équipe dont vous avez besoin pour
                  travailler avec votre entreprise comme une seule unité
                </p>
              </div>
            </div>
            <div className="s-item" data-aos="fade-up" data-aos-duration="1000">
              <span
                className="number"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                5
              </span>
              <div className="txt">
                <h4>DÉVELOPPEMENT</h4>
                <p>
                  Nous nous spécialisons dans l'utilisation de toutes les
                  technologies les plus avancées du marché, en particulier
                  Wordpress, Laravel Developer, HTML5, CSS3, JavaScript & JSON,
                  JQuery, Angular, PHP, Drupal, Joomla, Photoshop, Illustrator,
                  Développement d'applications, Développement Android / Os ,
                  Azure, ReactJs, VueJs, Nodejs, Magento, SMC, Frontend-Backend,
                  systèmes de gestion de contenu.
                </p>
              </div>
            </div>
            <div className="s-item" data-aos="fade-up" data-aos-duration="1000">
              <span
                className="number"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                6
              </span>
              <div className="txt">
                <h4>TRANSFORMATION DIGITALE</h4>
                <p>
                  Nous pensons que la bonne image de marque d'une entreprise
                  conduira à sa croissance rapide dans le monde numérique. Par
                  conséquent, nous mettons l'accent sur l'utilisation d'un large
                  éventail de méthodes de marketing organique et sur le
                  référencement. Nous mettons l'accent sur la création de pages,
                  les graphiques, le téléchargement de messages avec des mots
                  clés et l'activité organique. Nous sommes spécialisés dans la
                  promotion de sites web sur les plateformes telles que Google,
                  Yahoo, Google map, Being, Yandex, Youtube, Blogs, Facebook,
                  Instegram, Paper click, Taboola, PPC
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 right-2"></div>
      </section>
    </>
  );
};

export default Service;
