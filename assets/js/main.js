(() => {
  const iconMenu = document.querySelector(".icon-menu");
  const reponsiveSideBar = document.querySelector(".responsive-sidebar-menu");
  const reponsiveSideBarOverlay = document.querySelector(
    ".responsive-sidebar-menu .sidebar-overlay"
  );
  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const resume = document.querySelector("#resume");
  const mySkills = document.querySelector("#myskills");
  const portfolio = document.querySelector("#portfolio");
  const contact = document.querySelector("#contact");
  const section = [home, about, resume, mySkills, portfolio, contact];
  const sidebarNav = document.querySelectorAll(".nav-click");
  const responsiveSidebarNav = document.querySelectorAll(".respon-nav-click");
  const GoPortfolioBtn = document.querySelector(".go-portfolio-btn");

  // ICON Toggle Event
  function iconClick() {
    iconMenu.addEventListener("click", () => {
      reponsiveSideBar.classList.add("active");
    });
    reponsiveSideBarOverlay.addEventListener("click", (e) => {
      reponsiveSideBar.classList.remove("active");
    });
  }

  // Nav Scroll Evnet
  function navClick() {
    for (let i = 0; i < sidebarNav.length; i++) {
      sidebarNav[i].addEventListener("click", (e) => {
        e.preventDefault();
        window.scroll({
          top: section[i].offsetTop,
          behavior: "smooth",
        });
      });
    }

    for (let i = 0; i < responsiveSidebarNav.length; i++) {
      responsiveSidebarNav[i].addEventListener("click", (e) => {
        e.preventDefault();
        window.scroll({
          top: section[i].offsetTop,
          behavior: "smooth",
        });
        setTimeout(() => {
          reponsiveSideBar.classList.remove("active");
        }, 500);
      });
    }
  }

  function navScroll() {
    let y = window.pageYOffset;
    for (let i = 0; i < sidebarNav.length; i++) {
      let sectionOffsetTop = section[i].offsetTop;
      let sectionOffsetHeight = section[i].offsetHeight;

      if (y >= sectionOffsetTop && y < sectionOffsetTop + sectionOffsetHeight) {
        sidebarNav[i].classList.add("active");
      } else {
        sidebarNav[i].classList.remove("active");
      }
    }
    for (let i = 0; i < responsiveSidebarNav.length; i++) {
      let sectionOffsetTop = section[i].offsetTop;
      let sectionOffsetHeight = section[i].offsetHeight;

      if (y >= sectionOffsetTop && y < sectionOffsetTop + sectionOffsetHeight) {
        responsiveSidebarNav[i].classList.add("active");
      } else {
        responsiveSidebarNav[i].classList.remove("active");
      }
    }
  }

  // Go Portfilio Btn Event
  function GoPortfolio() {
    GoPortfolioBtn.addEventListener("click", (e) => {
      e.preventDefault();

      window.scroll({
        top: portfolio.offsetTop,
        behavior: "smooth",
      });
    });
  }

  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const portfolioDetailItems = document.querySelectorAll(
    ".portfolio-detail .porfolio-detail-item"
  );
  const portfolioDetailBox = document.querySelector(".portfolio-detail");
  const porfolioPrevBtn = document.querySelector(".portfolio-detail .prev");
  const porfolioNextBtn = document.querySelector(".portfolio-detail .next");
  const porfolioCloseBtn = document.querySelector(".portfolio-detail .close");
  const portfolioOverlay = document.querySelector(
    ".portfolio-detail .slider-overlay"
  );
  const currentImg = 0; // index of the first image
  const interval = 3000; // duration(speed) of the slide
  // Portfolio Slider
  function portfolioSlider() {
    for (let i = 0; i < portfolioItems.length; i++) {
      portfolioItems[i].addEventListener("click", (e) => {
        e.preventDefault();
        portfolioDetailBox.classList.add("show");
		for(let i = 0; i< portfolioDetailItems.length; i++){
			portfolioDetailItems[i].classList.remove("active");
		}
        portfolioDetailItems[i].classList.add("active");
      });
    }
    porfolioCloseBtn.addEventListener("click", () => {
      portfolioDetailBox.classList.remove("show");
      portfolioDetailItems.classList.remove("active");
    });

    portfolioOverlay.addEventListener("click", () => {
      portfolioDetailBox.classList.remove("show");
      portfolioDetailItems.classList.remove("active");
    });
  }

  window.addEventListener("click", (e) => {
    iconClick();
    navClick();
    GoPortfolio();
    portfolioSlider();
  });

  window.addEventListener("scroll", () => {
    setTimeout(navScroll, 500);
  });
})();
