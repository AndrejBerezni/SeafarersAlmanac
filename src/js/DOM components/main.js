function loadForm(container, city) {
    // Create elements
    const form = document.createElement('form');
    const askLocation = document.createElement('label');
    const location = document.createElement('input');
    const submit = document.createElement('button');

    // Add text
    askLocation.innerText = "Ahoy there, sailor! Where will you be setting sail from?"
    submit.innerText = "Hoist the Sails!"
    // Add attributes
    form.id = 'location-form';
    form.classList.add('hidden');

    // latitudeLabel.setAttribute('for', 'latitude');
    // longitudeLabel.setAttribute('for', 'longitude');
    // askLocation.setAttribute('for', 'location');

    // latitude.id ='latitude';
    // latitude.setAttribute('required', '');
    // latitude.setAttribute('type', 'number');
    // latitude.setAttribute('step', 'any');
    // latitude.setAttribute('name', 'latitude');
    // latitude.setAttribute('max', '90');
    // latitude.setAttribute('min', '-90');

    // longitude.id ='longitude';
    // longitude.setAttribute('required', '');
    // longitude.setAttribute('type', 'number');
    // longitude.setAttribute('step', 'any');
    // longitude.setAttribute('name', 'longitude');
    // longitude.setAttribute('max', '180');
    // longitude.setAttribute('min', '-180');

    location.id = 'location';
    location.setAttribute('type', 'text');
    location.setAttribute('required', '');
    location.value = city;

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

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        city = location.value;
    })

    observer.observe(form);
};

export default function loadMain(city) {
    const main = document.createElement('div');
    main.id = 'main-container';

    loadForm(main, city);
    
    document.body.appendChild(main);
}