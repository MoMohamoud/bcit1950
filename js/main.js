$(document).ready(function() {

$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });
 $('#submit-login').click(function(){
  var email = $('#email').val();

  
 });
 $('#user-option').click(function(){
 $( ".open-popup-link" ).toggle();
 $( ".menu-l" ).toggle();
 $( "#login-info" ).toggle();
 
 });
});