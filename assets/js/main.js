// Desarrollado por:
// Grizzly Systems
var elementTop = $('.menu').offset().top;
$(window).scroll(function(){
    if($(window).scrollTop() > elementTop){
        $('body').addClass('menu_fixed');
    }else{ 
        $('body').removeClass('menu_fixed');
    }
});