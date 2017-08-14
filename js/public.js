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
    var swiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        initialSlide :1,
        pagination : '.swiper-pagination'//分页器
    });
});
