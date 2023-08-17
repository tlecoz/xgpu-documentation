import json from './documentation.json'
import { Documentation } from './Documentation'
import { UIElement } from './UIElement';

const contener = new UIElement("div", {
    display: "flex",
    height: "100vh",
    position: "relative",
    boxSizing: "border-box"
});
contener.appendChild(new Documentation(json));



document.body.appendChild(contener.html);
