export default function createAboutPage() {
  const mainContainer = document.querySelector('.main-container');
  createAboutPageContent(mainContainer);
}

function createAboutPageContent(mainContainer) {
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');

  const aboutContent = document.createElement('div');
  aboutContent.classList.add('about-content');

  // first col - first text paragraph

  const aboutFirstCol = document.createElement('p');
  aboutFirstCol.textContent =
    'In the little village where I was born, life moved at a slower pace, yet felt all the richer for it. There, my two uncles were known far and wide for their delicious cooking. They seasoned their zesty chicken using only the freshest herbs and spices. People call them Los Pollos Hermanos: the chicken brothers. ';
  aboutFirstCol.classList.add('about-first-col');

  const aboutSecondCol = document.createElement('div');
  aboutSecondCol.classList.add('about-second-col');

  const aboutThirdCol = document.createElement('p');
  aboutThirdCol.classList.add('about-third-col');
  aboutThirdCol.textContent =
    'Today we carry on their tradition in a manner that would make my uncles proud. The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don’t take my word for it. One taste, and you’ll know.';

  aboutContent.appendChild(aboutFirstCol);
  aboutContent.appendChild(aboutSecondCol);
  aboutContent.appendChild(aboutThirdCol);
  aboutContainer.appendChild(aboutContent);
  mainContainer.appendChild(aboutContainer);
}
