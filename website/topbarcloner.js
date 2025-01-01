class SpecialTopbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<div class="topbar">' +
        '<div class="topbar-background">' +
            '<div class="topbar-content-holder left">' +
                '<a class="topbar-logo" href="https://magma-devy.github.io/UnblockedGamesUltimate/"></a>' +
            '</div>' +

            '<div class="topbar-content-holder center">' +
                '<a class="topbar-tab" href="#">GAMES</a>' +
                '<a class="topbar-tab" href="#">ABOUT</a>' +
                '<a class="topbar-tab" href="#">OTHER</a>' +
            '</div>' +

            '<div class="topbar-content-holder right">' +
                '<a class="topbar-icon" style="background-image: url(./images/hamburgerMenu.png);" href="#"></a>' +
                '<a class="topbar-icon" style="background-image: url(./images/gearSettings.png);" href="#"></a>' +
            '</div>' +
        '</div>' +
    '</div>';
    }
}

customElements.define('special-topbar', SpecialTopbar);