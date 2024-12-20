document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function onScroll() {
        let scrollPos = window.scrollY || document.documentElement.scrollTop;

        sections.forEach((section, index) => {
            if (
                scrollPos >= section.offsetTop - 10 &&
                scrollPos < section.offsetTop + section.offsetHeight
            ) {
                navLinks.forEach((link) => link.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", onScroll);
});
