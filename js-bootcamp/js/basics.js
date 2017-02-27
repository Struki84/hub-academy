var carsArray = [
	"Opel",
	"Renault",
	"Citoren",
	"Porcshe"

]

var password = 'js-developer'

$(document).ready(function(){
	console.log("ready")

	// Simple login form

	$('#submit-btn').click(function() {
		var emailValid = false
		var passwordValid = false
		var emailRegex = /\S+@\S+\.\S+/
		var inputEmail = $('#input-email').val()
		var inputPassword = $('#input-password').val()

		if (emailRegex.test(inputEmail)) {
			emailValid = true
		}
		else {
			emailValid = false
			$('.output').text('Input email is not valid email')
		}

		if (inputPassword == password) {
			passwordValid = true	
		}
		else {
			$('.output').text('Provided login is incorrect')
			passwordValid = false
		}

		if (passwordValid && emailValid) {
			$('.output').text('You are cool')
			$('#input-email').val('')
			$('#input-password').val(')
		}

	})

	//Display default array contents
	function showArray() {
		var text = ''
		for (var i = 0; i < carsArray.length; i++) {
			text += carsArray[i] + '</br>'
		}	
		$('.array-output').html(text)
	}

	showArray()
	
	// Add element to array

	$('#append-btn').click(function() {
		var elementValue = $('#input-element').val()
		carsArray.push(elementValue)
		showArray()
		$('#input-element').val('')
	})
})

