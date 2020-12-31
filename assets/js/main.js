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

//Slider Portafolio
var counter = 1;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 4){
    counter = 1;
}
}, 3000);