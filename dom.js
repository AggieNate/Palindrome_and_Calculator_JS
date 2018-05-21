// get user input
var wordTextBox = document.getElementById("input") 

// get button
var btn = document.getElementById("btnCheck")
var h3 = document.getElementById("message")
var reverseWord = ""

btn.addEventListener('click', function(){
	
	var word = wordTextBox.value
	

	/*for(var index = 0; index < word.length; index++) {
		console.log(word[index])
	}*/
	for(var i = word.length - 1; i >= 0; i--) {
		reverseWord += word[i]
		// reverseWord = reverseWord + word[i]
	}

	if (reverseWord == word) {
		h3.innerHTML = word + " is a palindrome."
	} else {
		h3.innerHTML = word + " is not a palindrome."
	}
})


/*console.log(input.value)





/*

function is_palindrome(input) {
	var reverse_input = ""
	
	for (var letters = 0, letters < word.length, letter++) {
		var reverse_input += input[index]
	return input = reverse_input
	}

} */
