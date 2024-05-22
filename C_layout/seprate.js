function loadContent() {
  // Array to store the promises for each fetch call
  const fetchPromises = [];

  // Function to fetch content and set innerHTML
  const fetchAndSetContent = (url, elementId) => {
    return fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(elementId).innerHTML += data;
      })
      .catch((error) => console.error("Error fetching content:", error));
  };
  Promise.all(fetchPromises)
    .then(() => {})
    .catch((error) => console.error("Error loading content:", error));



  // addScriptFiles("js/jquery.js");
  // addScriptFiles("js/popper.min.js");
  // addScriptFiles("js/bootstrap.min.js");
  // addScriptFiles("js/jquery.fancybox.js");
  // addScriptFiles("js/appear.js");
  // addScriptFiles("js/parallax.min.js");
  // addScriptFiles("js/tilt.jquery.min.js");
  // addScriptFiles("js/jquery.paroller.min.js");
  // addScriptFiles("js/owl.js");
  // addScriptFiles("js/wow.js");
  // addScriptFiles("js/isotope.js");
  // addScriptFiles("js/nav-tool.js");
  // addScriptFiles("js/jquery-ui.js");
  // addScriptFiles("js/script.js");
  setTimeout(() => {
    manageNavListEffect();
  }, 2000);
}

loadContent();

const manageNavListEffect = () => {
  let navLists = document.querySelectorAll(".lists");
  navLists.forEach((list) => {
    list.classList.remove("current");
  });
  let path = window.location.pathname;
  let nameOfFile = path.substring(path.lastIndexOf("/") + 1).split(".")[0];
  nameOfFile += "list";

  document.getElementById(nameOfFile).classList.add("current");
};

const addScriptFiles = (scriptFileAddress) => {
  const script = document.createElement("script");
  script.src = scriptFileAddress;
  script.async = true;
  document.body.appendChild(script);
};

const lazyLoad = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img");

    const lazyLoad = (target) => {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute("src");

            img.setAttribute("src", src);
            img.classList.remove("lazy");

            observer.unobserve(img);
          }
        });
      });

      io.observe(target);
    };

    lazyImages.forEach(lazyLoad);
  });
};




