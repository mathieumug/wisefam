


let menuOpen = document.getElementById('menu-open');
let menuClose = document.getElementById('close-icon');
let navLinks = document.getElementById('mobile-nav');

menuOpen.addEventListener('click', ()=>{
    navLinks.classList.add('show');
});

menuClose.addEventListener('click', ()=>{
    navLinks.classList.remove('show');
});




/******NAV BAR END*******/

//setup date
/*const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());*/

/*const loader = document.getElementById('loading');

window.addEventListener("load", function(){
 loader.style.display = "none";
});
*/

$(function () {
  $('.floating-wpp').floatingWhatsApp({
    phone: '+256704747975',
    popupMessage: 'Hello There',
    showPopup: true,
    message: 'Message To Send',
    headerTitle: 'Chat with us'
  });
});
