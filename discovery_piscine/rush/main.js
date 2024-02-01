import './style.css'
import { homeContent } from "./homeContent"
import { jeffContent } from "./phvanasr"
import { brightContent } from "./pkoosuwa"

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