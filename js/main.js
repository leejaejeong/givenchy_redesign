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

$('.category_box').click(function(){
    $(this).siblings().slideToggle(500);
    $(this).children('div').toggleClass('rotate');
})

$('.menu_btn').click(function(){
    $('.side_nav').fadeIn(400);
    $('body').addClass('stop_scroll');
})

$('.close_btn').click(function(){
    $('.side_nav').fadeOut(400);
    $('body').removeClass('stop_scroll');
})


$('.popup').hide();