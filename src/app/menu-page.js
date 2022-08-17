export default function createMenuPage() {
  const mainContainer = document.querySelector('.main-container');
  createMenuPageContent(mainContainer);
}

function createMenuPageContent(mainContainer) {
  ////////////////////////////
  //          MENU          //
  ////////////////////////////

  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  ////////////////////////////
  //    MENU  COL ONE       //
  ////////////////////////////

  const menuColOne = document.createElement('div');
  menuColOne.classList.add('menu-col-one');

  const menuHeaderColOne = document.createElement('p');
  menuHeaderColOne.classList.add('menu-header');
  menuHeaderColOne.textContent = 'BURRITOS';

  const menuItemsDiv = document.createElement('div');
  menuItemsDiv.classList.add('menu-item-container');

  const menuItemOneColOne = document.createElement('p');
  menuItemOneColOne.textContent = 'Carne Adovada';

  const menuItemTwoColOne = document.createElement('p');
  menuItemTwoColOne.textContent = 'Ground Beef';

  const menuItemThreeColOne = document.createElement('p');
  menuItemThreeColOne.textContent = 'Green Chile Chicken';

  const menuItemFourColOne = document.createElement('p');
  menuItemFourColOne.textContent = 'Shredded Beef';

  const menuItemFiveColOne = document.createElement('p');
  menuItemFiveColOne.textContent = 'Rice and Beans';

  const menuItemSixColOne = document.createElement('p');
  menuItemSixColOne.textContent = 'Beans and Cheese';

  menuColOne.appendChild(menuHeaderColOne);
  menuColOne.appendChild(menuItemsDiv);
  menuItemsDiv.appendChild(menuItemOneColOne);
  menuItemsDiv.appendChild(menuItemTwoColOne);
  menuItemsDiv.appendChild(menuItemThreeColOne);
  menuItemsDiv.appendChild(menuItemFourColOne);
  menuItemsDiv.appendChild(menuItemFiveColOne);
  menuItemsDiv.appendChild(menuItemSixColOne);

  ////////////////////////////
  //    MENU  COL TWO       //
  ////////////////////////////

  const menuColTwo = document.createElement('div');
  menuColTwo.classList.add('menu-col-two');

  const menuHeaderColTwo = document.createElement('p');
  menuHeaderColTwo.classList.add('menu-header');
  menuHeaderColTwo.textContent = 'BURGERS';

  const menuItemsDivTwo = document.createElement('div');
  menuItemsDivTwo.classList.add('menu-item-container');

  const menuItemOneColTwo = document.createElement('p');
  menuItemOneColTwo.textContent = 'All American Cheeseburger';

  const menuItemTwoColTwo = document.createElement('p');
  menuItemTwoColTwo.textContent = 'Green Chile Cheeseburger';

  const menuItemThreeColTwo = document.createElement('p');
  menuItemThreeColTwo.textContent = 'Honey BBQ Bacon Cheeseburger';

  const menuItemFourColTwo = document.createElement('p');
  menuItemFourColTwo.textContent = 'Cali Cheeseburger';

  const menuItemFiveColTwo = document.createElement('p');
  menuItemFiveColTwo.textContent = 'Burque Breakfast Burger';

  menuColTwo.appendChild(menuHeaderColTwo);
  menuColTwo.appendChild(menuItemsDivTwo);
  menuItemsDivTwo.appendChild(menuItemOneColTwo);
  menuItemsDivTwo.appendChild(menuItemTwoColTwo);
  menuItemsDivTwo.appendChild(menuItemThreeColTwo);
  menuItemsDivTwo.appendChild(menuItemFourColTwo);
  menuItemsDivTwo.appendChild(menuItemFiveColTwo);

  ////////////////////////////
  //    MENU  COL THREE     //
  ////////////////////////////

  const menuColThree = document.createElement('div');
  menuColThree.classList.add('menu-col-three');

  const menuHeaderColThree = document.createElement('p');
  menuHeaderColThree.classList.add('menu-header');
  menuHeaderColThree.textContent = 'CHICKEN';

  const menuItemsDivThree = document.createElement('div');
  menuItemsDivThree.classList.add('menu-item-container');

  const menuItemOneColThree = document.createElement('p');
  menuItemOneColThree.textContent = 'Honey BBQ Bacon';

  const menuItemTwoColThree = document.createElement('p');
  menuItemTwoColThree.textContent = 'New Mexican';

  const menuItemThreeColThree = document.createElement('p');
  menuItemThreeColThree.textContent = 'Californian';

  const menuItemFourColThree = document.createElement('p');
  menuItemFourColThree.textContent = 'Americano';

  menuColThree.appendChild(menuHeaderColThree);
  menuColThree.appendChild(menuItemsDivThree);
  menuItemsDivThree.appendChild(menuItemOneColThree);
  menuItemsDivThree.appendChild(menuItemTwoColThree);
  menuItemsDivThree.appendChild(menuItemThreeColThree);
  menuItemsDivThree.appendChild(menuItemFourColThree);

  //-----------------------------------//
  menuContent.appendChild(menuColOne);
  menuContent.appendChild(menuColTwo);
  menuContent.appendChild(menuColThree);
  mainContainer.appendChild(menuContent);
}
