import "./style.css";
import { controlTabel } from "./tableView.js";

document.querySelector("#app").innerHTML = `
    <div class="control-tab">
      <label for="x"></label>
      <input type="text" id="x">
      <label for="y"></label>
      <input type="text" id="y">
    </div>
    <h1>Table</h1>
`;

controlTabel(document.querySelector("#y"));
controlTabel(document.querySelector("#x"));


