const icons = {
    "Wind Speed": 'fa-wind',
    "Wind Direction": 'fa-compass',
    Temperature: 'fa-thermometer-half',
    Precipitation: 'fa-cloud-showers-heavy',
    "Atmospheric Pressure": 'fa-tachometer-alt',
    "Wave Height": 'fa-water',
    "Wave Direction": 'fa-compass',
    "Cloud Coverage": 'fa-cloud',
    "UV Index": 'fa-sun',
}

function loadDataToPanel(data) {
    // Clear panel
    const panel = document.getElementById('panel');
    panel.innerHTML = '';

    // Create elements
    for (let [key, value] of Object.entries(data)) {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element-div');

        const elementName = document.createElement('h1');
        elementName.innerText = `${key}:`

        const elementValue = document.createElement('p');
        elementValue.innerText = value;

        const elementIcon = document.createElement('icon');
        elementIcon.classList.add('fas', icons[key])

        elementDiv.appendChild(elementName);
        elementDiv.appendChild(elementValue);
        elementDiv.appendChild(elementIcon);

        panel.appendChild(elementDiv);
    }
}

function loadPanel() {
    const panel = document.createElement('div');
    panel.id = 'panel';
    document.body.appendChild(panel)
}

export {loadDataToPanel, loadPanel}