$(function() {
    $("#list a").mouseenter(function() {
        var index = $(this).index();
        var menu = $(".nav-menu");
        menu
            .slideDown()
            .find("ul")
            .eq(index)
            .show()
            .siblings()
            .hide()
            .parent()
            .parent()
            .hover(function() {
                menu.show();
            }, function() {
                menu.stop().slideUp();
            })
    })
})