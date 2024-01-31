import './style.css'
import { homeContent, jeffContent, brightContent } from "./constants"

function router() {
  const path = window.location.pathname;
  const contentDiv = document.getElementById('app');

  if (path === '/') {
    contentDiv.innerHTML = `${homeContent}`;
  } else if (path === '/jeff') {
    contentDiv.innerHTML = `${jeffContent}`;
  } else if (path === '/bright') {
    contentDiv.innerHTML = `${brightContent}`;
  } else {
    contentDiv.innerHTML = '<h2>404 - Page Not Found</h2>';
  }
}

router();

document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".menu");

  function updateActivePage() {
    const currentScroll = window.scrollY;
    let activeLink = null;

    sidebarLinks.forEach(link => {
      const sectionId = link.getAttribute("href");
      const section = document.querySelector(sectionId);

      if (section.offsetTop <= currentScroll && section.offsetTop + section.offsetHeight > currentScroll) {
        activeLink = link;
      } else {
        link.classList.remove("active");
      }
    });

    if (activeLink) {
      sidebarLinks.forEach(link => {
        if (link === activeLink) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }

  window.addEventListener("scroll", updateActivePage);

  sidebarLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = link.getAttribute("href");
      const section = document.querySelector(sectionId);

      window.scrollTo({
        top: section.offsetTop,
      });
    });
  });

  updateActivePage();
});