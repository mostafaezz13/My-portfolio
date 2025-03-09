document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const navCollapse = document.querySelector("#navbarNav");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navCollapse, {
          toggle: true,
        });
      }
    });
  });
});
