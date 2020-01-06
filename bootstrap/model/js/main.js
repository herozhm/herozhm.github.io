// 轮播图文字
$('#carousel-example-generic').on('slide.bs.carousel', function() {
    // console.log("开始切换");

})
$('#carousel-example-generic').on('slid.bs.carousel', function(e) {
    // console.log("切换完成");

    $(e.relatedTarget)
        .find('.caption')
        .addClass('active')
        .end()
        .siblings()
        .find('.caption')
        .removeClass('active')
})

// 相册
var current;
$('.gallery img').click(function() {


    $('#myModal').modal('show');
    $('#myModal').find('.modal-body img').attr('src', $(this).attr('src'));

    current = $(this);
});

$('#myModal .modal-footer span').eq(1).click(function() {
    if (current.parent().next().find('img')[0]) {
        current = current.parent().next().find('img');
    }

    // current = current.parent().next().find('img');
    $('#myModal').find('.modal-body img').attr('src', current.attr('src'));
});

$('#myModal .modal-footer span').eq(0).click(function() {
    if (current.parent().prev().find('img')[0]) {
        current = current.parent().prev().find('img');
    }

    // current = current.parent().prev().find('img');
    $('#myModal').find('.modal-body img').attr('src', current.attr('src'));
});