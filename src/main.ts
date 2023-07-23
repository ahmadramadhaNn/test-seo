import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Ahmad Ramadhan</h1>
    <p>Ingat bro gula enggak dia kenapa gitu manis apa?</p>
    <div class="card">
      <button id="decreaseBtn" type="button">-</button>
      <button id="countervalue" type="button">0</button>
      <button id="increaseBtn" type="button">+</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

const counterBtn = document.querySelector<HTMLButtonElement>("#countervalue")!;
const decreaseBtn = document.querySelector<HTMLButtonElement>("#decreaseBtn")!;
const increaseBtn = document.querySelector<HTMLButtonElement>("#increaseBtn")!;

setupCounter(counterBtn, decreaseBtn, increaseBtn);
