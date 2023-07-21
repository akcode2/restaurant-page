import { loadMenu, createSubMenu, createMenuItem } from './menu';
import { loadReservations } from './reservations';
import { createHero, createPitchHeader, createPitch, loadHome } from './home';

// Wrap everything in an IIFE
(function () {
    // Helper function to call when creating elements
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

    function createNavMenu() {
        const navMenu = createElement('div', 'nav-menu');
        const navList = createElement('ul')
        const home = createElement('li', null, 'Home')
        home.addEventListener('click', () => {
            const contentWrapper = document.getElementById('content-wrapper');
            contentWrapper.textContent = '';
            contentWrapper.append(createHeader(), createHero(), loadHome());
            setActiveLink('Home');
        })

        const menu = createElement('li', null, 'Menu');
        menu.addEventListener('click', () => {
            const contentWrapper = document.getElementById('content-wrapper');
            contentWrapper.textContent = '';
            contentWrapper.append(createHeader(), loadMenu());
            setActiveLink('Menu');
        })

        const reservations = createElement('li', null, 'Reservations');
        reservations.addEventListener('click', () => {
            const contentWrapper = document.getElementById('content-wrapper');
            contentWrapper.textContent = '';
            contentWrapper.append(createHeader(), loadReservations(), createContactHours());
            setActiveLink('Reservations');
        })

        navList.append(home, menu, reservations);
        navMenu.append(navList);


        return navMenu;
    }

    function setActiveLink(linkName) {
        const navLinks = document.querySelectorAll('.nav-menu > ul > li');
        // Deactivate all links
        navLinks.forEach((link) => link.classList.remove('active'));
        // Set active link
        const activeLink = Array.from(navLinks).find(link => link.textContent === linkName);
        activeLink.classList.add('active');
    }

    function createHeader() {
        const header = createElement('header');

        const logo = createElement('div', 'logo');

        const name = createElement('div', 'name', "Fratelli's");
        const subname = createElement('div', 'sub-name', 'Cucina Italiana');

        logo.append(name, subname);

        header.append(logo, createNavMenu());

        return header;
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



    const contentWrapper = document.getElementById('content-wrapper');
    contentWrapper.append(createHeader(), createHero(), loadHome());
    
})()


