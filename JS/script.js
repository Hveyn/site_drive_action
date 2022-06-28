new Swiper('.personal_slider', {
    //стрелки
    navigation: {
        nextEl: '.arrow_left',
        prevEl: '.arrow_right'
    },

    loop: true,

    effect: 'flip',

    flipEffect: {
        slideShadows: true,

        limitRotation: true
    },
});

new Swiper('.slider_cars',{
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    effect: "fade",

    loop: true,

    fadeEffect: {
        crossFade: true,
    },
})

