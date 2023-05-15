const icons = {
  "Wind Speed": "fa-wind",
  "Wind Direction": "fa-compass",
  Temperature: "fa-thermometer-half",
  Precipitation: "fa-cloud-showers-heavy",
  "Atmospheric Pressure": "fa-tachometer-alt",
  "Wave Height": "fa-water",
  "Wave Direction": "fa-compass",
  "Cloud Coverage": "fa-cloud",
  "UV Index": "fa-sun",
};

const units = {
  "Wind Speed": "km/h",
  "Wind Direction": "",
  Temperature: "°C",
  Precipitation: "mm",
  "Atmospheric Pressure": "mb",
  "Wave Height": "m",
  "Wave Direction": "°",
  "Cloud Coverage": "%",
  "UV Index": "",
};

function checkUnits(key, value, p) {
  if (key === "Wind Speed") {
    if (value <= 35) {
      p.style.color = "green";
    } else if (value > 35 && value < 40) {
      p.style.color = "yellow";
      p.style.fontWeight = "bold";
    } else {
      p.style.color = "red";
    }
  } else if (key === "Temperature") {
    if (value <= 35) {
      p.style.color = "green";
    } else if (value > 35 && value < 40) {
      p.style.color = "yellow";
      p.style.fontWeight = "bold";
    } else {
      p.style.color = "red";
    }
  } else if (key === "Precipitation") {
    if (value <= 10) {
      p.style.color = "green";
    } else if (value > 10 && value < 15) {
      p.style.color = "yellow";
      p.style.fontWeight = "bold";
    } else {
      p.style.color = "red";
    }
  } else if (key === "Atmospheric Pressure") {
    if (value > 1000) {
      p.style.color = "green";
    } else {
      p.style.color = "red";
    }
  } else if (key === "Wave Height") {
    if (value <= 2) {
      p.style.color = "green";
    } else if (value > 2 && value <= 3) {
      p.style.color = "yellow";
      p.style.fontWeight = "bold";
    } else {
      p.style.color = "red";
    }
  } else if (key === "Cloud Coverage") {
    if (value <= 30) {
      p.style.color = "green";
    } else if (value > 30 && value < 60) {
      p.style.color = "yellow";
      p.style.fontWeight = "bold";
    } else {
      p.style.color = "red";
    }
  } else if (key === "UV Index") {
    if (value < 6) {
      p.style.color = "green";
    } else if (value === 6) {
      p.style.color = "yellow";
      p.style.fontWeight = "bold";
    } else {
      p.style.color = "red";
    }
  }
}

function loadDataToPanel(data) {
  // Clear panel
  const panel = document.getElementById("panel");
  panel.innerHTML = "";

  // Create elements
  for (let [key, value] of Object.entries(data)) {
    const elementDiv = document.createElement("div");
    elementDiv.classList.add("element-div", "hidden");

    const elementName = document.createElement("h1");
    elementName.innerText = `${key}`;

    const elementValue = document.createElement("p");
    elementValue.innerText = `${value}${units[key]}`;

    const elementIcon = document.createElement("icon");
    elementIcon.classList.add("fas", icons[key]);
    checkUnits(key, value, elementValue);

    elementDiv.appendChild(elementIcon);
    elementDiv.appendChild(elementName);
    elementDiv.appendChild(elementValue);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    observer.observe(elementDiv);
    panel.appendChild(elementDiv);
  }
}

function loadPanel() {
  const panel = document.createElement("div");
  panel.id = "panel";
  document.body.appendChild(panel);
}

export { loadDataToPanel, loadPanel };
