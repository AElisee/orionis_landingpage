const menuBurger = document.getElementById("menu-toggle");
const link = document.getElementsByClassName("link");
const linksArray = Array.from(link);

menuBurger.addEventListener("click", () => {
  links.style.visibility =
    links.style.visibility === "visible" ? "hidden" : "visible";
  links.style.display = "block";
});

if (window.innerWidth < 993) {
  linksArray.forEach((elt) => {
    elt.addEventListener("click", (e) => {
      links.style.display = "none";
    });
  });
}
