import loadNavbar from "./navbar";
import loadMain from "./main";
import { loadPanel, loadDataToPanel } from "./panel";
import loadFooter from "./footer";
import getWeatherData from "../getWeatherData";

export default async function loadHome(city) {
    loadNavbar();
    loadMain(city);
    loadPanel();
    loadFooter()
}