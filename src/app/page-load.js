const template = document.querySelector('#content');

//header
const header = document.createElement('header');
header.classList.add('header-container');

//header, content
const headerContent = document.createElement('div');
headerContent.classList.add('header-content');

//header welcome to text
const headerText = document.createElement('p');
headerText.textContent = 'Welcome to';

//header mini text
const headerMiniText = document.createElement('p');
headerMiniText.textContent =
  'Where something good is always cooking.';

//header logo-buttons container
const headerLogoButtonContainer = document.createElement('div');
headerLogoButtonContainer.classList.add(
  'header-logo-button-container'
);

//header main button
const headerMainButton = document.createElement('button');
headerMainButton.textContent = 'Main';
headerMainButton.classList.add('header-buttons');

//header menu button
const headerMenuButton = document.createElement('button');
headerMenuButton.textContent = 'Menu';
headerMenuButton.classList.add('header-buttons');

//header about button
const headerAboutButton = document.createElement('button');
headerAboutButton.textContent = 'About';
headerAboutButton.classList.add('header-buttons');

//header about button
const headerLocationButton = document.createElement('button');
headerLocationButton.textContent = 'Location';
headerLocationButton.classList.add('header-buttons');

//header logo container
const headerLogo = document.createElement('div');
headerLogo.classList.add('header-logo-container');

headerContent.appendChild(headerText);
headerContent.appendChild(headerLogoButtonContainer);
headerContent.appendChild(headerMiniText);

headerLogoButtonContainer.appendChild(headerMainButton);
headerLogoButtonContainer.appendChild(headerMenuButton);
headerLogoButtonContainer.appendChild(headerLogo);
headerLogoButtonContainer.appendChild(headerAboutButton);
headerLogoButtonContainer.appendChild(headerLocationButton);

header.appendChild(headerContent);

template.appendChild(header);
