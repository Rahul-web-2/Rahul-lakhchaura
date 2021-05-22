const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


form.addEventListener('submit', e =>  {
	e.preventDefault();
	
	validateForm();
	 
});

function  validateForm() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const cpasswordValue = cpassword.value.trim();
	

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else if (!isUser(usernameValue)){
		setErrorFor(username, 'Only character will use');
	} 
	else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}  else if(!isPassword(passwordValue)) {
		setErrorFor(password, '');
	}
	else {
		setSuccessFor(password);
	}
	
	if(cpasswordValue === '') {
		setErrorFor(cpassword, 'Confirm Password cannot be blank');
	} else if(passwordValue !== cpasswordValue) {
		setErrorFor(cpassword, ' Confirm Passwords does not match');
	} else{
		setSuccessFor(cpassword);
	}
}
function isUser(username) {
	return /^[A-Z]$/.test(username);
} 
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPassword(password) {
	return /^[a-zA-Z0-9!@#$&*]$/.test(password);
}



function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const span = formControl.querySelector('span');
	formControl.className = 'form-control error';
	span.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}