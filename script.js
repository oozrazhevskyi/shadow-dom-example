class SomeCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const container = document.createElement('div');
        container.setAttribute('class', 'container')

        const style = document.createElement('style');
        style.textContent = `
            .container {
                border: 1px black solid;
                padding: 10px;
                margin: 5px;
                max-width: fit-content;
            }
        `        
        shadow.appendChild(style);

        const header = document.createElement('h1');
        header.textContent = "hello";
        container.appendChild(header);


        const description = document.createElement('p');
        description.textContent = 'lorem ipsum'
        container.appendChild(description);
        const hr = document.createElement('hr');
        const someSlot = document.createElement('slot');
        container.appendChild(hr)
        container.appendChild(someSlot)
        shadow.appendChild(container);
    }
}

customElements.define('some-card', SomeCard)