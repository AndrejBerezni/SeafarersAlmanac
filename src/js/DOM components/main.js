import getWeatherData from "../getWeatherData";
import { loadDataToPanel } from "./panel";

function loadForm(container, city) {
    // Create elements
    const form = document.createElement('form');
    const askLocation = document.createElement('label');
    const location = document.createElement('input');
    const submit = document.createElement('button');

    // Add text
    askLocation.innerText = "Ahoy there, sailor! Where will you be setting sail from?"
    submit.innerText = "Check conditions"

    // Add attributes
    form.id = 'location-form';
    form.classList.add('hidden');

    location.id = 'location';
    location.setAttribute('type', 'text');
    location.setAttribute('required', '');
    location.setAttribute('placeholder', 'Enter location...');

    // Append elements
    form.appendChild(askLocation);
    form.appendChild(location);
    form.appendChild(submit);

    container.appendChild(form);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        })
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        city = location.value;
        const data = await getWeatherData(city);
        loadDataToPanel(data);
    })

    observer.observe(form);
};

export default function loadMain(city) {
    const main = document.createElement('div');
    main.id = 'main-container';

    loadForm(main, city);
    
    document.body.appendChild(main);
}