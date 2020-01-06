$(function() {
    $('.menu').on('click', function() {

        if ($(this).hasClass('open')) {
            $('.two').css({
                width: '22px'
            })

            $(this).removeClass('open');

            $('.one,.three').css({
                transform: 'rotateZ(0deg)',
                top: '0px'
            })

            $('.person').css({
                right: '15px'
            })

        } else {
            $('.two').css({
                width: '0px'
            })

            $(this).addClass('open');

            $('.one').css({
                transform: 'rotataZ(45deg)',
            })
        }
    })
})