export default function createLocationPage() {
  const mainContainer = document.querySelector('.main-container');
  createLocationPageContent(mainContainer);
}

function createLocationPageContent(mainContainer) {
  const locationContainer = document.createElement('div');
  locationContainer.classList.add('location-container');

  const locationContent = document.createElement('div');
  locationContent.classList.add('location-content');

  // image

  const locationImage = document.createElement('img');
  locationImage.classList.add('location-image');

  // location info

  const locationInfo = document.createElement('p');
  locationInfo.textContent =
    '	14 different locations, with the most notable in Albuquerque, New Mexico, United States ( ͡° ͜ʖ ͡°)';
  locationInfo.classList.add('location-info');

  locationContent.appendChild(locationImage);
  locationContent.appendChild(locationInfo);
  locationContainer.appendChild(locationContent);
  mainContainer.appendChild(locationContainer);
}
