$(document).ready(function(){
    // 切换
    var tabs = function (tab, con) {
        tab.click(function () {
            var index = tab.index(this);
            tab.removeClass('active');
            $(this).addClass('active');
            con.removeClass('active');
            con.eq(index).addClass('active');
        })
    };
    // 举例
    //tabs($(".tab-index span"),$(".tab-con .tab-panel"))

    // 轮播
    var swiper2 = new Swiper('.swiper2', {
        initialSlide :0,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 10
    });
});
