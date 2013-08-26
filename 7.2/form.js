$(document).ready(function(){
	$(':radio[name=sex]').change(function() {
	  console.log($(this).val());
	});

	$(':checkbox[name=ethnic]').change(function() {
	  console.log($(this).val());
	});


	$('.cities').change(function(){
		console.log($(this).val());
	});//not sure how to make this one work with :selector
});


