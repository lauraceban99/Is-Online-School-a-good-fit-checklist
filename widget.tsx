import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // your existing main component

// Turns your app into a reusable HTML tag <aia-quiz>
class AIAQuiz extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const mount = document.createElement("div");
    shadow.appendChild(mount);

    // optional settings you can pass from Webflow
    const endpoint = this.getAttribute("data-endpoint") || "";
    const theme = this.getAttribute("data-theme") || "light";

    createRoot(mount).render(<App endpoint={endpoint} theme={theme} />);
  }
}

customElements.define("aia-quiz", AIAQuiz);
