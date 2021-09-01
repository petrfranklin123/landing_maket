(function(){

        const header = document.querySelector('.header');
        window.onscroll = () => {
            if(window.pageYOffset > 50){
                header.classList.add('header_background');
            }else{
                header.classList.remove('header_background');
            }
        }

}());
(function () {
    const  burgerItem = document.querySelector('.burger');
    const  menu = document.querySelector('.header_nav');
    const menu_close = document.querySelector('.header_nav_close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menu_close.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
}());