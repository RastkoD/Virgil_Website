class Header {
    constructor() {
        this.$DOM = {
            header: $(".header"),
            menu: $(".header__menu"),
            nav: $(".header__nav"),
            btn: $(".header__btn")
        }

        this.$DOM.btn.click(this.toggleNav);
    }

    toggleNav = () => {
        this.$DOM.btn.toggleClass("is-open");
        this.$DOM.nav.toggleClass("is-open");
        this.$DOM.header.toggleClass("is-open");
        this.$DOM.menu.stop().slideToggle("fast");
    }
}