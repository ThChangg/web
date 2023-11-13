
var username = document.querySelector('#name');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            showError(input, 'Không được để trống');
            isEmptyError = true;
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmailError(input) {
    const regexEmail = /^\S+@\S+\.\S+$/;
    input.value = input.value.trim();
    let isValidEmail = regexEmail.test(input.value);

    if (!isValidEmail) {
        showError(input, 'Định dạng email không hợp lệ');
    } else {
        showSuccess(input);
    }

    return isValidEmail;
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim();

    if (input.value.length < min) {
        showError(input, `Phải có ít nhất ${min} ký tự`);
        return true;
    }

    if (input.value.length > max) {
        showError(input, `Không được quá ${max} ký tự`);
        return true;
    }
    showSuccess(input);
    return false;
}
function checkMatchPasswordError(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'Mật khẩu không trùng khớp');
        return true;
    }
    showSuccess(cfPasswordInput);
    return false;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email);
    
    let isUsernameLengthError = checkLengthError(username, 3, 10);
    let isPasswordLengthError = checkLengthError(password, 6, 12);
    let isMatchError = checkMatchPasswordError(password, confirmPassword);

    // Add additional validation or form submission logic here
    if (!isEmptyError && !isEmailError && !isUsernameLengthError && !isPasswordLengthError && !isMatchError) {
        // Form submission logic can go here
        console.log('Form submitted successfully');
    }
});

var username = document.querySelector('#name');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            showError(input, 'Không được để trống');
            isEmptyError = true;
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmailError(input) {
    const regexEmail = /^\S+@\S+\.\S+$/;
    input.value = input.value.trim();
    let isValidEmail = regexEmail.test(input.value);

    if (!isValidEmail) {
        showError(input, 'Định dạng email không hợp lệ');
    } else {
        showSuccess(input);
    }

    return isValidEmail;
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim();

    if (input.value.length < min) {
        showError(input, `Phải có ít nhất ${min} ký tự`);
        return true;
    }

    if (input.value.length > max) {
        showError(input, `Không được quá ${max} ký tự`);
        return true;
    }
    showSuccess(input);
    return false;
}
function checkMatchPasswordError(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'Mật khẩu không trùng khớp');
        return true;
    }
    showSuccess(cfPasswordInput);
    return false;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email);
    
    let isUsernameLengthError = checkLengthError(username, 3, 10);
    let isPasswordLengthError = checkLengthError(password, 6, 12);
    let isMatchError = checkMatchPasswordError(password, confirmPassword);

    // Add additional validation or form submission logic here
    if (!isEmptyError && !isEmailError && !isUsernameLengthError && !isPasswordLengthError && !isMatchError) {
        // Form submission logic can go here
        console.log('Form submitted successfully');
    }
});

