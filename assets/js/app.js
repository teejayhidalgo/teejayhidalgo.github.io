class UI {
    constructor() {
        this.button = document.querySelector('#profileButton');
    }

    click() {
        window.open(
            '../cv.pdf',
            '_blank'
        );
    }
}

const ui = new UI;

ui.button.addEventListener('click', function (e) {
    e.preventDefault();
    ui.click();
});