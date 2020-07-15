$(function(){
$('.menu a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('.menu').innerHeight();
        $('html, body').animate ({
            scrollTop: targetOffset - 95
        }, 500);

        return false;

       
})

$('.menu-mobile a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('.menu-mobile').innerHeight();
        $('html, body').animate ({
            scrollTop: targetOffset - 95
        }, 700);

        return false;       
})


$('.menu-mobile').click(function(){
    $('.menu-mobile').find('ul').slideToggle();
})

})