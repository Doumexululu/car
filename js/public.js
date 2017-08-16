$(document).ready(function(){
    // 切换
    var tabs = function (tab, con) {
        tab.click(function () {
            var index = tab.index(this);
            tab.removeClass('about-tab-active');
            $(this).addClass('about-tab-active');
            con.removeClass('about-panel-active');
            con.eq(index).addClass('about-panel-active');
        })
    };
    // 举例
    tabs($(".about-tab span"),$(".about-cont .about-panel"));

    // 轮播
    var swiper = new Swiper('.banner .swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        initialSlide :1,
        pagination : '.swiper-pagination'//分页器
    });
    var swiper = new Swiper('.pinpai .swiper-container', {
        // pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 5,
        // paginationClickable: true,
        spaceBetween: 100,
        freeMode: true
    });
    $(".returntop").click(function(){
        var sc=$(window).scrollTop();
        $('body,html').animate({scrollTop:0},500);
    })
});
