let inputName = document.getElementById("name-input")
let inputEmail = document.getElementById("email-input")
let inputPhoneNumber = document.getElementById("phone-number-input")

let nameError = document.getElementById('name-error')
let emailError = document.getElementById('email-error')
let phoneNumberError = document.getElementById('phone-number-error')

let validName = false
let validEmail = false
let validPhoneNumber = false

function nameValidation() {

    if(inputName.value === "")  {

        nameError.innerHTML = 'This field is required';
        nameError.style.display = 'inherit'

    } else {

        validName = true
        nameError.style.display = 'none'

    }

}

function emailValidation() {
    let arr = inputEmail.value.split('');

    if(inputEmail.value === "")  {

        emailError.innerHTML = 'This field is required';
        emailError.style.display = 'inherit';

    } else if(arr.indexOf('@') === -1 || arr.indexOf('.') === -1) {

        emailError.style.display = 'inherit';
        emailError.innerHTML = 'This email is not valid';

    } else {

        emailError.style.display = 'none';
        validEmail = true

    }

}

function phoneNumberValidation() {
    let arr = inputPhoneNumber.value.split('');

    if(inputPhoneNumber.value === "")  {

        phoneNumberError.innerHTML = 'This field is required';
        phoneNumberError.style.display = 'inherit';

    } else if (arr[0] !== '+' || arr.length !== 11) {
        phoneNumberError.innerHTML = 'This phone number is not valid';
        phoneNumberError.style.display = 'inherit';

    } else {

        phoneNumberError.style.display = 'none';
        validPhoneNumber = true;

    }
}

function button() {
    nameValidation();
    emailValidation();
    phoneNumberValidation();

    if(validName === true && validEmail === true && validPhoneNumber === true) {

        document.getElementById('registration-alert').style.display = 'inherit'

    }
}