$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__menu').toggleClass('active');
		$('.header__burger').toggleClass('active');
		$('body').toggleClass('lock');
	});
	
});