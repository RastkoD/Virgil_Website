class Gallery {
    constructor() {
        this.$DOM = {
            slider: $(".gallery__slider")
        }

        this.$DOM.slider.on("afterChange", this.updatePagination);
        this.$DOM.slider.on("init", this.setPagination);

        this.$DOM.slider.slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: "<img src='images/i-arrow.svg' class='gallery__slider-arrow gallery__slider-arrow--prev'>",
            nextArrow: "<img src='images/i-arrow.svg' class='gallery__slider-arrow gallery__slider-arrow--next'>",
            dots: false,
            fade: false
        });
    }

    setPagination = (e, slick) => {
        const $slider = $(slick.$slider);
        const $totalSlides = $slider.next().find(".total-slides");
        $totalSlides.text(slick.$slides.length);
    }

    updatePagination = (e, slick, currentSlide) => {
        const $slider = $(slick.$slider);
        const $currentSlide = $slider.next().find(".current-slide");
        $currentSlide.text(currentSlide + 1);
    }
}