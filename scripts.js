$(document).ready(function(){
	$("#login").click(function(event){
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var password = $("#password").val();
		$("#contact-right").html(name + "<br>" + email + "<br>" + password);
	});

	/* Przejscia przy wczytywaniu strony */
	$("p, h1, h2, h3, h4, a, img, form, button").hide().fadeIn(2000);
});