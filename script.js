const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')


btnNavEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open')
})

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");


    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });


    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }


    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});



const sectionHeroEl = document.querySelector('.section-hero')

const obs = new IntersectionObserver((entries) => {
  const ent = entries[0]
  if(ent.isIntersecting === false){
    document.body.classList.add('sticky')
  }

  if(ent.isIntersecting === true){
    document.body.classList.remove('sticky')
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: '-80px'
})

obs.observe(sectionHeroEl)