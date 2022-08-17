import createMainPage from './app/page-load';
import createMenuPage from './app/menu-page';
import createAboutPage from './app/about-page';
import createLocationPage from './app/location-page';
import './style.css';

createMainPage();

const headerTabs = document.querySelectorAll('.header-buttons');

function changeTabs(tabText) {
  const mainContainer = document.querySelector('.main-container');
  while (mainContainer.hasChildNodes()) {
    mainContainer.removeChild(mainContainer.lastChild);
  }
  if (tabText === 'Main') {
    createMainPage();
  } else if (tabText === 'Menu') {
    createMenuPage();
  } else if (tabText === 'About') {
    createAboutPage();
  } else {
    createLocationPage();
  }
}

headerTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    let tabText = tab.textContent;
    changeTabs(tabText);
  });
});
