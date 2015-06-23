$(document).ready(function() {

function accordionInit() {
    $("#accordion").accordion();
};

function accordionDestroy() {
    $("#accordion").accordion("destroy");
};
$(function() {
    $( "#accordion" ).accordion({
	collapsible: true,
	  active: 0,
	  animate: 400,
	heightStyle: "content"
		// event: "mouseover"
  });

});
function accordionInit() {
    $("#accordion").accordion();
};

function accordionDestroy() {
    $("#accordion").accordion("destroy");
};
$(function() {
    $( "#accordion" ).accordion({
	collapsible: true,
	  active: 0,
	  animate: 400,
	heightStyle: "content"
		// event: "mouseover"
  });

});

   
   
$('.open-popup-link').magnificPopup({
  focus:'#email',
  type:'inline',
  midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#email';
				}
			}
  }
  });
 $('#submit-login').click(function(){
  var email = $('#email').val();
  

  
 });
 $('#user-option').click(function(){
 $( ".open-popup-link" ).toggle();
 $( ".menu-l" ).toggle();
 $( "#login-info" ).toggle();
 
 });

	 $('.count').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 2000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});

	$(".dropdown").hover(function (event) {
	    $('.glyphicon', this).toggleClass('rotate');
	    $('.glyphicon', this).toggleClass('rotate2');
	});

	 // // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
  // $('.dropdown').click(function(e){
  //   $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  // });

  // //ADD SLIDEUP ANIMATION TO DROPDOWN //
  // $('.dropdown').click(function(e){
  //   $(this).find('.open').first().stop(true, true).slideUp();
  // });

	$('.dropdown').hover(function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
	}, function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
	});

});

