let navbar = document.querySelector(".header");

window.onscroll = () => {
    navbar.classList.remove("active");
  
    if (window.scrollY > 0) {
      document.querySelector(".header").classList.add("active");
    } else {
      document.querySelector(".header").classList.remove("active");
    }
};
