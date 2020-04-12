// chooselang()
function choosecurrency(el) {
    document.getElementById('changing_currency').value = el.dataset.myval;
}

$(document).ready(function () {

     window.addEventListener('mouseup', function (event) {

         var langdrop = document.getElementById('lang_menu');
         (event.target != langdrop) ?
         $('#menu_open').addClass('hidden'): $('#menu_open').removeClass('hidden');

         $('#lang_menu').click(function () {
             document.getElementById("menu_open").classList.toggle("hidden");
         });



     });

     window.addEventListener('mouseup', function (e) {

         var currencydrop = document.getElementById('currency_menu');
         (e.target != currencydrop) ?
         $('#menu_currency_open').addClass('hidden'): $('#menu_currency_open').removeClass('hidden');

         $('#currency_menu').click(function () {
             document.getElementById("menu_currency_open").classList.toggle("hidden");
         });

     });

     $('#arabic').click(function () {
         document.getElementById('changing_language').value = document.getElementById('arabic').innerText;
     });

     $('#english').click(function () {
         document.getElementById('changing_language').value = document.getElementById('english').innerText;
     });
    
    
    
});