import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // uses your existing app

class AIAQuiz extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const mount = document.createElement("div");
    shadow.appendChild(mount);

    // Optional: pass settings from Webflow via attributes:
    const endpoint = this.getAttribute("data-endpoint") || "";
    const theme = this.getAttribute("data-theme") || "light";

    // If your App doesn't take props, just render <App />.
    // If it does, add them below.
    // @ts-ignore
    createRoot(mount).render(<App endpoint={endpoint} theme={theme} />);
  }
}

customElements.define("aia-quiz", AIAQuiz);
