import loadNavbar from "./navbar";
import loadMain from "./main";
import loadPanel from "./panel";
import loadFooter from "./footer";

export default function loadHome() {
    loadNavbar();
    loadMain();
    loadPanel();
    loadFooter()
}