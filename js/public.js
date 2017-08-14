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
    var swiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        initialSlide :1,
        pagination : '.swiper-pagination'//分页器
    });
});
