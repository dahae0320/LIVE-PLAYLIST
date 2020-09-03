var mql = window.matchMedia("screen and (max-width: 480px)");


// mql.addListener(function (e) {
    if (mql.matches) {
        console.log('모바일 화면 입니다.');
        // var mySwiper = new Swiper('.swiper-container', {
        //     // Optional parameters
        //     loop: true,

        //     // If we need pagination
        //     pagination: {
        //         el: '.swiper-pagination'
        //     }
        // });
        $(document).ready(function () {
            var mySwiper = new Swiper('.swiper-container', {
                // Optional parameters
                loop: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination'
                }

            });
        });
    } else {
        console.log('데스크탑 화면 입니다.');
    }
// });


