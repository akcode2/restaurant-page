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

function loadReservations() {
    const reservationsWrapper = createElement('div', 'reservations-wrapper');
    const reservationsHeader = createElement('div', 'reservations-header');
    // Create form
    const form = createElement('form');
    const homeLink = document.createElement('a');
    homeLink.setAttribute('href', './index.html');

    const numGuestsLabel = document.createElement('label');
    numGuestsLabel.textContent = 'I would like a table for '
    form.append(numGuestsLabel);
    const numGuests = document.createElement('select');
    numGuests.setAttribute('id', 'numGuests');
    numGuests.setAttribute('name', 'numGuests');

    for (let i = 2; i < 9; i++) {
        let opt = createElement('option', null, `${i} Guests`);
        opt.setAttribute('value', i);
        numGuests.append(opt);
    }
    form.append(numGuests);

    form.append(document.createElement('br'));
    form.append(document.createTextNode('on '));
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'date');
    dateInput.setAttribute('name', 'date');
    const today = new Date();
    // Convert the date to the format "YYYY-MM-DD" required for the date input's value attribute
    var formattedToday = today.toISOString().slice(0, 10);
    dateInput.value = formattedToday;
    form.append(dateInput);

    form.append(document.createTextNode('at '));
    const timeInput = document.createElement('input');
    timeInput.setAttribute('type', 'time');
    timeInput.setAttribute('id', 'time');
    timeInput.setAttribute('name', 'time');
    timeInput.setAttribute('min', '16:00');
    timeInput.setAttribute('max', '23:00');
    form.append(timeInput);

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    form.append(document.createElement('br'));
    form.append(submit);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const oldMsg = document.querySelector('form' + 'p');
        if (oldMsg) {
            oldMsg.remove();
        }
        const newMsg = document.createElement('p');
        newMsg.classList.add('confirmation-msg');
        newMsg.textContent = `Thank you! We will have a table for your party of ${numGuests.value}.`
        form.insertAdjacentElement('afterend', newMsg);
    })

    reservationsWrapper.append(reservationsHeader, form);
    return reservationsWrapper;
}

export { loadReservations }