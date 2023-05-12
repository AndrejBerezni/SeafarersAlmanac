export default function loadFooter() {
    // Create elements
    const footer = document.createElement('div');
    const linkedIn = document.createElement('a');
    const gitHub = document.createElement('a');
    const email = document.createElement('a');
    const linkedInIcon = document.createElement('icon');
    const gitHubicon = document.createElement('icon');
    const emailicon = document.createElement('icon');

    // Set attributes
    footer.id = 'footer';
    linkedIn.setAttribute('href', "https://www.linkedin.com/in/andrej-berezni-6386b11a3");
    email.setAttribute('href', "mailto:berezniandrej@gmail.com");
    gitHub.setAttribute('href', "https://github.com/AndrejBerezni");

    linkedIn.setAttribute('target', "_blank");
    email.setAttribute('target', "_blank");
    gitHub.setAttribute('target', "_blank");

    linkedInIcon.classList.add('fab', 'fa-linkedin');
    gitHubicon.classList.add('fab', 'fa-github');
    emailicon.classList.add('fas', 'fa-envelope');

    linkedIn.appendChild(linkedInIcon);
    email.appendChild(emailicon);
    gitHub.appendChild(gitHubicon);

    footer.appendChild(linkedIn);
    footer.appendChild(email);
    footer.appendChild(gitHub);

    document.body.appendChild(footer);
}