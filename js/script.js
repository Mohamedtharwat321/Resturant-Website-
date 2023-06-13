////////////////////////////////
// make mobile nav
///////////////////////////////

const btnNav = document.querySelector(".btn-moblie-nav");

const header = document.querySelector(".main-header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

///////////////////////////////////////////////
//make scrolling smooth
////////////////////////////////////////////

const alllinks = document.querySelectorAll("a:link");

alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) console.log(href);
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth" });

    // make nav-mobile disapper when user click on link
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});

////////////////////////////////
// sticky navigation
///////////////////////////////

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) document.body.classList.add("sticky");

    if (ent.isIntersecting === true) document.body.classList.remove("sticky");
  },

  {
    root: null,
    threshold: 0,
    rootMargin: "-80px", //height of sticky class
  }
);
obs.observe(sectionHero);
