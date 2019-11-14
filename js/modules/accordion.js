class Accordion {
    constructor() {
        this.$DOM = {
            item: $(".accordion__item"),
            header: $(".accordion__item-header"),
            main: $(".accordion__item-main")
        }

        this.$DOM.header.click(this.toggleContent);
    }

    resetAccordions = () => {
        this.$DOM.item.removeClass("is-open");
        this.$DOM.main.stop().slideUp("fast");
    }

    toggleContent = e => {
        const $this = $(e.currentTarget);
        const $main = $this.next();
        const $item = $this.parent();
        $item.toggleClass("is-open");
        $main.stop().slideToggle("fast");
    }
}