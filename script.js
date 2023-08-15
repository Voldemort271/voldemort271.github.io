window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("nav").style.padding = "15px 30px";
        document.getElementById("nav-logo").style.fontSize = "1.5rem";
        document.getElementById("nav").style.background = "#EDF6F977";
        document.getElementById("nav").style.backdropFilter = "blur(10px)";
        document.getElementById("nav").style.color = "#353b3c";
        document.getElementById("nav").style.boxShadow = "0px 0px 30px #353b3c55";

    } else {
        document.getElementById("nav").style.padding = "30px";
        document.getElementById("nav-logo").style.fontSize = "2rem";
        document.getElementById("nav").style.background = "none";
        document.getElementById("nav").style.color = "#EDF6F9";
        document.getElementById("nav").style.boxShadow = "none";
        document.getElementById("nav").style.backdropFilter = "none";
    }
}

var options = {
    strings: ["who makes webpages for fun.", "who's very charming, just like this webpage.", "who's not got a lot of free time.", "who's also an aspiring pro web designer."],
    typeSpeed: 40,
    startDelay: 1000,
    showCursor: false
};

var typed = new Typed('#header-desc', options);

(function () {
  const scrollElements = document.querySelectorAll(".js-scroll");

  function elementIsInView(el, divisor = 1) {
    const elementTop = el.getBoundingClientRect().top;

    return elementTop <= window.innerHeight / divisor;
  }

  function handleScrollAnimation() {
    scrollElements.forEach((el) => {
      if (elementIsInView(el, 1.25)) {
        el.classList.add("scrolled");
      } else if (!elementIsInView(el)) {
        el.classList.remove("scrolled");
      }
    });
  }

  window.addEventListener("scroll", handleScrollAnimation);
})();