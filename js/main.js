$(window).scroll(function(){
    
    let header_offset = $('.header_container').offset().top;
    
    if($(window).scrollTop() === 0){
        $('.header_container').removeClass('fix');
    }else if($(window).scrollTop() >= header_offset){
        $('.header_container').addClass('fix');
    }
    return false;
})

$('.side_nav').hide();

$('.menu_btn').click(function(){
    $('.side_nav').fadeIn(400);
    $('body').addClass('stop_scroll');
})

$('.side_nav .close_btn').click(function(){
    $('.side_nav').fadeOut(400);
    $('body').removeClass('stop_scroll');
})



$('.category_box').click(function(){
    $('.sub_category').slideUp();
    $('.category_box > div').removeClass('rotate');
    if($(this).siblings().hasClass('active')){
        $(this).siblings().removeClass('active');
        $(this).children('div').removeClass('rotate');
    } else {
        $(this).siblings().slideDown(500);    
        $(this).siblings().addClass('active');
        $(this).children('div').addClass('rotate');
    }
})


$('.popup').hide();

$('.marquee > .voyou').click(function(){
    $('.popup.voyou').fadeIn(400);
})
$('.marquee > .shark_lock').click(function(){
    $('.popup.shark_lock').fadeIn(400);
})
$('.marquee > .sunglasses').click(function(){
    $('.popup.sunglasses').fadeIn(400);
})
$('.marquee > .bags').click(function(){
    $('.popup.bags').fadeIn(400);
})
$('.marquee > .jewelry').click(function(){
    $('.popup.jewelry').fadeIn(400);
})



$('.popup .close_btn').click(function(){
    $('.popup').fadeOut(400);
})

$(document).mouseup(function(e){
    var popUp = $('.popup > .container')
    if(popUp.has(e.target).length === 0 ){
        $('.popup').fadeOut(400); 
    }
})