customElements.define(
    'spinner-loader',
    class extends HTMLElement {
        connectedCallback() {
            this.attachShadow({ mode: 'open' });

            const size = this.getAttribute('size') || '2rem';
            const circleColor = this.getAttribute('circle') || '#eee';
            const innerColor = this.getAttribute('inner') || '#888';

            this.shadowRoot.innerHTML = /* html */ `
                <style>
                    :host {
                        --s-loader-width: ${size};
                        --s-loader-height: var(--s-loader-width);
                        --s-loader-border-color-trans: ${circleColor};
                        --s-loader-border-color-full: ${innerColor};
                        
                        display: inline-block;
                        width: var(--s-loader-width);
                        height: var(--s-loader-height);
                        border: 5px solid var(--s-loader-border-color-trans);
                        border-left-color: var(--s-loader-border-color-full);
                        border-radius: 50%;
                        background: transparent;
                        animation-name: rotate-s-loader;
                        animation-iteration-count: infinite;
                        animation-duration: 1s;
                        animation-timing-function: linear;
                        position: relative;
                    }
                    
                    @keyframes rotate-s-loader {
                        from {
                            transform: rotate(0);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                </style>
        `;
        }
    }
);
