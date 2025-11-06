import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

class AIAQuiz extends HTMLElement {
  connectedCallback() {
    // Mount directly without shadow DOM for better Tailwind compatibility
    const mount = document.createElement("div");
    this.appendChild(mount);

    // @ts-ignore
    createRoot(mount).render(<App />);
  }
}

customElements.define("aia-quiz", AIAQuiz);
