function loadForm(container) {
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
    askCoordinates.innerText = "Ahoy there, sailor! Could ye lend a hand and give us the ol' coordinates?"
    latitudeLabel.innerText = "Latitude";
    longitudeLabel.innerText = "Longitude";
    askLocation.innerText = "If ye don't know the coordinates, tell me where yer be setting sail from and we'll plot our course accordingly:"
    submit.innerText = "Hoist the Sails!"
    // Add attributes
    form.id = 'location-form';

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
};

export default function loadMain() {
    const main = document.createElement('div');
    main.id = 'main-container';

    loadForm(main);

    document.body.appendChild(main);
}