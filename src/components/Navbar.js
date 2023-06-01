import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [openNav, setOpenNav] = useState(false);

  const handleClikc = () => {
    setOpenNav(!openNav);
  };

  const handleLinkClick = () => {
    setOpenNav(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        setNavbarBackground("rgb(57,166,222)");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav_bar fixed" style={{ background: navbarBackground }}>
      <div className="nav-container flex flex-aic flex-jcb">
        <div className="logo">
          <h1>ORIONIS CI</h1>
        </div>
        <div className="nav_links flex flex-jce">
          <ul id="links" className={openNav ? "open" : ""}>
            <li className="link" onClick={handleLinkClick}>
              <a href="#" rel="noopener noreferrer">
                Accueil
              </a>
            </li>
            <li className="link" onClick={handleLinkClick}>
              <a href="#about" rel="noopener noreferrer">
                A propos
              </a>
            </li>
            <li className="link" onClick={handleLinkClick}>
              <a href="#services" rel="noopener noreferrer">
                Services
              </a>
            </li>
            <li className="link" onClick={handleLinkClick}>
              <a href="#team" rel="noopener noreferrer">
                Equipe
              </a>
            </li>
            <li className="link" onClick={handleLinkClick}>
              <a href="#contactUs" rel="noopener noreferrer">
                Nous contacter
              </a>
            </li>
          </ul>
        </div>

        <div className="menu-burger flex flex-jcc flex-aic">
          <img src="./images/menuburger.svg" alt="" onClick={handleClikc} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
