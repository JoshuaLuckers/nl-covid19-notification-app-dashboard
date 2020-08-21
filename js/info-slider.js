(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<a class="' + className + '" href="#swiper-slide-' + index + '"><span class="screen-reader-text">Ga naar slide ' + (index + 1) + '</span></a>';
                // TODO #91: render vanuit liquid en geef juist taal keys
            }
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        // Lazy load images
        lazy: {
            loadPrevNext: true
        },
    });
})();
