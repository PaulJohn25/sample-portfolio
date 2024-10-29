const scrollUp = () => {
  const scrollUpElem = document.getElementById("scroll-up");
  const scrollUpBtn = document.getElementById("scroll-up__btn");

  let lastScrollPosition = 0;
  let isScrolling;

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    scrollUpElem.classList.remove("show");
  };

  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;

    // Clear the previous timeout
    clearTimeout(isScrolling);

    // Sets new timeout when user starts scrolling
    isScrolling = setTimeout(() => {
      console.log("User stops the damn scrolling");

      // Show the scrollUpELement only when the user leaves on the initial position of the page
      if (currentScrollPosition > 50) {
        scrollUpElem.classList.add("show");
      }
    }, 150);

    if (currentScrollPosition > lastScrollPosition) {
      console.log("Scrolling down");
      scrollUpElem.classList.remove("show");
    } else {
      console.log("Scrolling up");
      scrollUpElem.classList.remove("show");
    }

    console.log("ScrollY: ", currentScrollPosition);

    lastScrollPosition = currentScrollPosition;
  });

  scrollUpBtn.onclick = handleScrollUp;
};

export default scrollUp;
