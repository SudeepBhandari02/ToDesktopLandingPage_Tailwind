//Nav controls
const smallNav = document.getElementById("smallNav");
function navToggle() {
  smallNav.classList.toggle("hidden");
}

//Scroll Slider handling part
const scroll1 = document.getElementById("scroll1");
const scroll2 = document.getElementById("scroll2");
const scroll3 = document.getElementById("scroll3");

function setupIntersectionObserver(element, isLtr, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("scroll", handleScroll);
    }
  };

  const handleScroll = () => {
    if (isLtr) {
      element.scrollLeft = window.scrollY * speed;
    } else {
      element.scrollLeft =
        element.scrollWidth - element.clientWidth - window.scrollY * speed;
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);
}

setupIntersectionObserver(scroll1, true, 0.5);
setupIntersectionObserver(scroll2, false, 0.5);
setupIntersectionObserver(scroll3, true, 0.5);

//FAQ description toggler
const faqs = document.querySelectorAll(".group dt");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.nextElementSibling.classList.toggle("hidden");
    faq.querySelector("i").classList.toggle("fa-angle-up");
    faq.querySelector("i").classList.toggle("fa-angle-down");
  });
});
