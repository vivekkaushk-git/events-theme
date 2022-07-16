
var ww = document.body.clientWidth;


$(window).on('resize orientationchange', function () {
    ww = document.body.clientWidth;
    adjustMenu();
});
var adjustMenu = function () {
    var togglemenu = $('.toggleMenu'), navli = $(".nav li"), navclass = $(".nav");
    if (ww <= 1024) {
        togglemenu.css("display", "inline-block");
        if (!togglemenu.hasClass("active")) {
            navclass.hide();
        } else {
            navclass.show();
        }
        navli.off('mouseenter mouseleave');
        $(".nav li a.parent").off('click').on('click', function (e) {
            // must be attached to anchor element to prevent bubbling
            e.preventDefault();
            $(this).parent("li").toggleClass("hover");
        });
    }
    else if (ww >= 1024) {
        togglemenu.css("display", "none");
        navclass.show();
        navli.removeClass("hover");
        $(".nav li a").off('click');
        navli.off('mouseenter mouseleave').on('mouseenter mouseleave', function () {
            // must be attached to li so that mouseleave is not triggered when hover over submenu
            $(this).toggleClass('hover');
        });
    }
}

