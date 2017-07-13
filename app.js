document.addEventListener("DOMContentLoaded", function() {

	document.getElementById('payment-form').addEventListener('submit', function(event){
		
	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
								   
	if(firstname === "" || lastname === "") {
		alert("You must enter a name to continue!");
		return;
	} 

	if(firstname === /^[0-9]/ || lastname === /^[0-9]/) {
		alert('Please do not enter numbers within the name fields');
		return;
	}

	var ccInput = document.getElementByID('credit-card').value;
	var ccNum = parseInt(ccInput);

	if(ccInput.length !== 16) {
		alert('Credit Card must be 16 digits');
		return;
	} else if (isNaN(ccNum)); {
		alert('Please only use numbers');
		return;
	}

	var expInput = document.getElementById('expiration').value;
	var expDate = expInput.length;

	if(expDate !== 5) {
		alert('Please use enter date format as MM/DD')
		return;
	}

	var cvc = document.getElementById('cvc').value;
	var cvcNum = parseInt(cvc)

	if(cvcNum.length !== 3) {
		alert('CVC is only 3 digits');
		return;
	} else if(isNaN(cvcNum)) {
		alert('CVC only accepts numbers')
		return;
	} else {
		alert('Thank you for your submission')
		return;
	}

	document.getElementById('submit-form').addEventListener('click', function(done){
		alert('Thank You for your submission')
	});

 	});
});