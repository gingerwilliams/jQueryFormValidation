$(document).ready(function(){
	// list of psudo selectors http://www.w3schools.com/jquery/jquery_ref_selectors.asp
	$(':submit').click(function(e){
		$(':text').each(function(){
			if($(this).val().length == 0){
				document.getElementById('error_text').innerHTML = "! This field is required";
				$(this).css('border', '1px solid red');
				return false;
			}else{
				console.log("This is still working");
			}
		});
		e.preventDefault();
	}); 
	
});


