$(window).scroll(function(){
    
    let header_offset = $('.header_container').offset().top;
    
    if($(window).scrollTop() === 0){
        $('.header_container').removeClass('fix');
    }else if($(window).scrollTop() >= header_offset){
        $('.header_container').addClass('fix');
    }
    return false;
})
