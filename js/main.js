$(window).scroll(function(){
    
    let header_offset = $('.header_container').offset().top;
    
    if($(window).scrollTop() === 0){
        $('.header_container').removeClass('fix');
    }else if($(window).scrollTop() >= header_offset){
        $('.header_container').addClass('fix');
    }
    return false;
})

$('.side_nav_sec').hide();

$('.menu_btn').click(function(){
    $('.side_nav_sec').fadeIn(400);
    $('body').addClass('stop_scroll');
})

$('.side_nav_sec .close_btn').click(function(){
    $('.side_nav_sec').fadeOut(400);
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


$('.popup_sec').hide();

$('.marquee > .voyou').click(function(){
    $('.voyou_popup').fadeIn(400);
})
$('.marquee > .shark_lock').click(function(){
    $('.shark_lock_popup').fadeIn(400);
})
$('.marquee > .sunglasses').click(function(){
    $('.sunglasses_popup').fadeIn(400);
})
$('.marquee > .bags').click(function(){
    $('.bags_popup').fadeIn(400);
})
$('.marquee > .jewelry').click(function(){
    $('.jewelry_popup').fadeIn(400);
})



$('.popup_sec .close_btn').click(function(){
    $('.popup_sec').fadeOut(400);
})

$(document).mouseup(function(e){
    var popUp = $('.popup_sec > .container')
    if(popUp.has(e.target).length === 0 ){
        $('.popup_sec').fadeOut(400); 
    }
})