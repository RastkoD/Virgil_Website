class Popup {
    constructor() {
        this.$DOM = {
            trigger: $("[data-popup-trigger]"),
            backdrop: $(".backdrop"),
            popup: $(".popup"),
            inner: $(".popup__inner")
        }

        this.$DOM.trigger.click(this.togglePopup);
        this.$DOM.popup.click(this.closePopup);
        this.$DOM.inner.click(e => { e.stopPropagation(); });
    }

    closePopup = () => {
        this.$DOM.backdrop.removeClass("is-active");
        this.$DOM.popup.removeClass("is-active");
    }

    togglePopup = e => {
        e.preventDefault();
        this.$DOM.backdrop.toggleClass("is-active");
        const $this = $(e.currentTarget);
        const target = $this.attr("data-popup-trigger");
        $(`[data-popup-target="${target}"]`).toggleClass("is-active");
    }
}