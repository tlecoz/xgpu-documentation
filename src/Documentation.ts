import { UIElement } from "./UIElement";
import { FileMenu } from "./FileMenu";
import appConfig from './appConfig.json';
import { FileDocumentation } from "./FileDocumentation";

export class Documentation extends UIElement {

    constructor(json: any) {
        super("div", {
            display: "flex",
            flexDirection: "column",
            position: "relative",
            fontFamily: "Arial",
            width: appConfig.APP_WIDTH,
            minHeight: (window.innerHeight - appConfig.HEADER_HEIGHT - appConfig.FOOTER_HEIGHT) + "px",
        })

        let menu = this.appendChild(new FileMenu(json)) as FileMenu;
        const fileDocumentation = this.appendChild(new FileDocumentation()) as FileDocumentation;
        menu.onSelect = (file: any) => fileDocumentation.init(file);
        menu.select("BuiltIns")

        window.addEventListener("popstate", () => {
            if (window.location.pathname.indexOf("/documentation/") !== -1) {
                let fileDoc: string = window.location.pathname.split("/").pop();
                if (menu) menu.select(fileDoc)
            }
        })

    }
}

