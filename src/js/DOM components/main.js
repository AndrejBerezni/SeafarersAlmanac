function loadForm(container, lat, lon) {
    // Create elements
    const form = document.createElement('form');
    const askCoordinates = document.createElement('h1');
    const latitudeLabel = document.createElement('label');
    const longitudeLabel = document.createElement('label');
    const latitude = document.createElement('input');
    const longitude = document.createElement('input');
    const askLocation = document.createElement('label');
    const location = document.createElement('input');
    const submit = document.createElement('button');

    // Add text
    askCoordinates.innerText = "Ahoy there, sailor! Give us your coordinates and we will tell you weather conditions for sailing!"
    latitudeLabel.innerText = "Latitude";
    longitudeLabel.innerText = "Longitude";
    askLocation.innerText = "If you don't know the coordinates, tell us your location:"
    submit.innerText = "Hoist the Sails!"
    // Add attributes
    form.id = 'location-form';
    form.classList.add('hidden');

    latitudeLabel.setAttribute('for', 'latitude');
    longitudeLabel.setAttribute('for', 'longitude');
    askLocation.setAttribute('for', 'location');

    latitude.id ='latitude';
    latitude.setAttribute('required', '');
    latitude.setAttribute('type', 'number');
    latitude.setAttribute('step', 'any');
    latitude.setAttribute('name', 'latitude');
    latitude.setAttribute('max', '90');
    latitude.setAttribute('min', '-90');

    longitude.id ='longitude';
    longitude.setAttribute('required', '');
    longitude.setAttribute('type', 'number');
    longitude.setAttribute('step', 'any');
    longitude.setAttribute('name', 'longitude');
    longitude.setAttribute('max', '180');
    longitude.setAttribute('min', '-180');

    location.id = 'location';
    location.setAttribute('type', 'text');

    // Append elements
    form.appendChild(askCoordinates);
    form.appendChild(latitudeLabel);
    form.appendChild(latitude);
    form.appendChild(longitudeLabel);
    form.appendChild(longitude);
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

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        lat = latitude.value;
        lon = longitude.value;
    })

    observer.observe(form);
};

export default function loadMain() {
    const main = document.createElement('div');
    main.id = 'main-container';

    loadForm(main);


    document.body.appendChild(main);
}