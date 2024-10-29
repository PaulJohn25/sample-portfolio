const lazyLoading = () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("loading");
        img.classList.add("loaded");
        observer.unobserve(img); // Prevents reobserving the tagget element
      }
    });
  });

  const lazyImgs = document.querySelectorAll(".lazy");
  lazyImgs.forEach((img) => observer.observe(img));
};

export default lazyLoading;
