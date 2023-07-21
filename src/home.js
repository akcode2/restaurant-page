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

function createHero() {
    const hero = createElement('div', 'hero');
    return hero;
}

function createPitchHeader() {
    const pitchHeader = createElement('div', 'pitch-header', 'Passion and creativity intertwine');
    return pitchHeader;
}

function createPitch() {
    const pitchBody = createElement('div', 'pitch-body');
    const pitch = createElement('div', 'pitch');
    pitch.append(
        createElement('p', null, "At Fratelli's, we honor the traditions that have made Italian cuisine legendary, while embracing innovation and modern techniques."),
        createElement('br'),
        createElement('p', null, "Indulge your senses as our talented chefs craft extraordinary culinary masterpieces that will transport you to the heart of Italy."),
        createElement('br'),
        createElement('p', null, "With meticulous attention to detail and a commitment to sourcing the finest ingredients, every dish that leaves our kitchen is a symphony of flavors, textures, and aromas.")
    );

    const buttons = createElement('div', 'buttons');
    const menuBtn = createElement('div', 'menu-btn', 'Menu');
    const resBtn = createElement('div', 'res-btn', 'Reservations');

    buttons.append(menuBtn, resBtn);

    pitchBody.append(pitch, buttons);
    
    return pitchBody;
}


function loadHome() {
    const main = createElement('main');

    main.append(createPitchHeader(), createPitch(), createContactHours());
    return main;
}

function createContactHours() {
    const contactHours = createElement('div', 'contact-hours');
    const contact = createElement('div', 'contact');
    const contactHeader = createElement('h3', null, 'Contact');

    contact.append(
        contactHeader,
        createElement('br'),
        createElement('p', null, 'Located in the historic Bella Vista neighborhood:'),
        createElement('p', null, '2323 Connecticut Ave,'),
        createElement('p', null, 'Philadelphia, PA 19148'),
        createElement('br'), 
        createElement('p', null, "P. 215-555-3838 | E. info@fratelliscucina.com")
    )

    const hours = createElement('div', 'hours');
    const hoursHeader = createElement('h3', null, 'Hours');

    hours.append(
        hoursHeader,
        createElement('br'),
        createElement('p', null, 'Tuesday - Sunday'),
        createElement('p', null, '4pm - 11pm')
    )

    contactHours.append(contact, hours);
    return contactHours;
}

export { createHero, createPitchHeader, createPitch, loadHome }