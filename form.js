$(document).ready(function(){
	$(':submit').click(function(e){
		$('.required').each(function(){
			if($(this).val().length == 0){
				document.getElementById('error_text').innerHTML = "This field is required";
				$(this).css('border','2px solid red');
			}else{
				console.log("this is also working");
			}
		});

		$(':checkbox').each(function(){
			if($(this).is(':not(:checked)')){
				document.getElementById('error_check').innerHTML = "Please check one box";
				$('#checkboxes').css('border','2px solid red');
			}else{
				console.log("boxes have been checked");
			}
		});

		$('radio[name=b]').change(function(){
			alert($(this).val());
		});

		
		e.preventDefault();
	});
});


