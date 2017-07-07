document.addEventListener("DOMContentLoaded", function() {

	document.getElementById('payment-form')
			
			var firstname = document.getElementById('firstname')
									.value;
			var lastname = document.getElementById('lastname')
								   .value;
								   
			if(firstname === "" || lastname === "") {
				alert("You must enter a name to continue!");
				return;
			}





});