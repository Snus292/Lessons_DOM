
$('#menuslide li').click(function(){
	$('ul', this).slideToggle(100);	

    
});
$(document).ready(function () {
 
$('.count').each(function () {
   $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
     duration: 1500,
     easing: 'swing',
     step: function (now) {
        $(this).text(Math.ceil(now));
     }
    });
});

 
});

