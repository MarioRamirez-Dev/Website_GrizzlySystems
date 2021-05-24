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

//Funcionamiento del boton de menu
$('.btn_menu').on('click',function(){
    $('.nav').toggleClass('nav-toggle');
});
//Boton Hamburguesa del menu
document.getElementById('hamburguer_menu')
.addEventListener('click', ({ target }) => {
    target.classList.toggle('open')
})
