(function () {
    "use strict";
    // Navbar on scrolling
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 200) {
            navbar.style.display = "flex";
            navbar.style.opacity = 1;
        } else {
            navbar.style.display = "none";
            navbar.style.opacity = 0;
        }
    });

    // Smooth scrolling on the navbar links
    document.querySelectorAll(".navbar-nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                let target = document.querySelector(this.hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 45,
                        behavior: "smooth"
                    });
                }
                document.querySelector(".navbar-nav .active")?.classList.remove("active");
                this.classList.add("active");
            }
        });
    });

    // Typed Initiate
    if (document.querySelector(".typed-text-output")) {
        let typedStrings = document.querySelector(".typed-text").textContent.split(", ");
        new Typed(".typed-text-output", {
            strings: typedStrings,
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Modal Video
    let videoSrc;
    document.querySelectorAll(".btn-play").forEach(button => {
        button.addEventListener("click", function () {
            videoSrc = this.getAttribute("data-src");
        });
    });

    document.getElementById("videoModal")?.addEventListener("shown.bs.modal", function () {
        document.getElementById("video").src = videoSrc + "?autoplay=1&modestbranding=1&showinfo=0";
    });

    document.getElementById("videoModal")?.addEventListener("hide.bs.modal", function () {
        document.getElementById("video").src = videoSrc;
    });

    // Scroll to Bottom
    window.addEventListener("scroll", function () {
        let scrollBottom = document.querySelector(".scroll-to-bottom");
        if (window.scrollY > 100) {
            scrollBottom.style.display = "none";
        } else {
            scrollBottom.style.display = "block";
        }
    });

    // Skills Animation
    document.querySelectorAll(".skill").forEach(skill => {
        new Waypoint({
            element: skill,
            handler: function () {
                document.querySelectorAll(".progress .progress-bar").forEach(bar => {
                    bar.style.width = bar.getAttribute("aria-valuenow") + "%";
                });
            },
            offset: "80%"
        });
    });

    // Portfolio Isotope and Filter
    let portfolioContainer = document.querySelector(".portfolio-container");
    if (portfolioContainer) {
        let iso = new Isotope(portfolioContainer, {
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows"
        });

        document.querySelectorAll("#portfolio-flters li").forEach(filter => {
            filter.addEventListener("click", function () {
                document.querySelector("#portfolio-flters .active")?.classList.remove("active");
                this.classList.add("active");
                iso.arrange({ filter: this.getAttribute("data-filter") });
            });
        });
    }

    // Back to top button
    let backToTop = document.querySelector(".back-to-top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop?.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Testimonials carousel
    if (document.querySelector(".testimonial-carousel")) {
        new OwlCarousel(".testimonial-carousel", {
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            loop: true,
            items: 1
        });
    }
})();
