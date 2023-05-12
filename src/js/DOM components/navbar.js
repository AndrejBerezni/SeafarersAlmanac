export default function loadNavbar() {
    const navbar = document.createElement('div');
    const title = document.createElement('h1');
    const logo = document.createElement('icon');

    navbar.id = 'navbar';
    
    title.innerText = "Seafarer's Almanac";
    logo.classList.add('fas', 'fa-anchor');

    navbar.appendChild(title);
    navbar.appendChild(logo);

    document.body.appendChild(navbar);
}