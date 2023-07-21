function createElement(tag, classNames, textContent) {
    const element = document.createElement(tag);
    if (classNames) {
        element.classList.add(...classNames.split(' '));
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

function loadMenu() {
    const menuWrapper = createElement('div', 'menu-wrapper');
    const menuContainer = createElement('div', 'menu-container');

    const appSection = createElement('div', 'menu-section');
    appSection.append(
        createSubMenu('Appetizers'),
        createMenuItem('Carpaccio', 'Texas Wagyu Beef, Lily Mushroom, Horseradish Burrata, Devils Kiss Pepper', '25'),
        createMenuItem('Tonno', 'Yellowfin Tuna, Golden Beet, Elote, Petite Arugula, Wild Onion Gremolata', '21'),
        createMenuItem('Tartina Di Granchio', 'Marble Lump Crab Tart, Blue Oyster Mushroom, Saffron Roasted Corn', '29'),
    );

    const insalateSection = createElement('div', 'menu-section');
    insalateSection.append(
        createSubMenu('Insalate'),
        createMenuItem('Burrata', 'Specklebelly Farm Tomato, Puglia Burrata, Cucuumer Ribbons, Avocado, Rosemary Focaccia, Petite Arugula, Fig Saba, Dimmit County Olive Oil', '16'),
        createMenuItem('Lattuga', 'Romaine Chiffonade, Boquerone Crostini, Parmesan Ribbons, Caesar Dressing', '14')
    );

    const pastaSection = createElement('div', 'menu-section');
    pastaSection.append(
        createSubMenu('Pasta'),
        createMenuItem('Spaghetti Al Tartufo Nero', 'Cacio Pepe, Parmigiano Reggiano, Dr Delicacy Italian Black Truffle', '55'),
        createMenuItem('Ravioli Di Funghi', 'Indian Creek Mushroom, Fava Bean, Sottocenere Cheese, Spring Corn', '35'),
        createMenuItem('Tagliatelle Al Fagiano', 'Slow Roasted Ringneck Pheasant, English Pea, Petite Kale, Crispy Guanciale', '45'),
        createMenuItem('Granchio', 'Crispy Softshell Crab, Specklebelly Farm Tomato, Tabbouleh, Avocado, Meyer Lemon, Blue Crab Tartar', '49')
    )

    const pesceSection = createElement('div', 'menu-section');
    pesceSection.append(
        createSubMenu('Pesce E Carne'),
        createMenuItem('Branzino', "Cast Iron Seared Sea Bass, Farmer's Vegetable Confetti, Petite Pea Sprout", '39'),
        createMenuItem('Filetto Di Manzo', "Prime Texas Wagyu Filet, Garlic Potato, Farmer's Vegetable, Merchand De Vin", '89')
    );


    menuContainer.append(appSection, insalateSection, pastaSection, pesceSection);
    menuWrapper.append(menuContainer);

    return menuWrapper;
}

function createSubMenu(text) {
    const subMenu = createElement('div', 'submenu');
    const title = createElement('span', null, text);
    const line = createElement('div', 'line');
    subMenu.append(title, line);
    
    return subMenu;
}

function createMenuItem(dishName, dishDescription, price) {
    const menuItem = createElement('div', 'menu-item');
    const dish = createElement('div', 'dish');
    const nameSpan = createElement('span', 'dish-name', dishName);
    const description = createElement('div', 'dish-description', dishDescription);

    dish.append(nameSpan, description);

    const priceDiv = createElement('div', 'price', price);
    menuItem.append(dish, priceDiv);
    
    return menuItem;
}

export { loadMenu, createSubMenu, createMenuItem }