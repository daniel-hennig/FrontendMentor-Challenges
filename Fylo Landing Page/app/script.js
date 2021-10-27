'use strict'

/* ========== Form Validation ========== */
const forms = document.getElementsByTagName('form');
const email = document.querySelectorAll('.email-input');
const errorContainer = document.querySelectorAll('.error-container');
const btnSubmit = document.querySelectorAll('.btn-submit');

for(let i = 0; i < forms.length; i++) { // loop through both forms
    // input validation
    forms[i].addEventListener('input', (e) => {
        if(validateEmail(email[i].value) === false) {
            email[i].setAttribute('aria-invalid', 'true');
            email[i].setAttribute('aria-describedBy', `wrong-email${i+1}`); // + 1, because the actual value is starting at 0

            if(!errorContainer[i].classList.contains('error')) {
                errorContainer[i].classList.add('error');
                email[i].classList.add('--border-red');
                forms[i].classList.add('--gap-3');
            }
        } else {
            email[i].removeAttribute('aria-invalid');
            email[i].removeAttribute('aria-describedBy');

            if(errorContainer[i].classList.contains('error')) {
                errorContainer[i].classList.remove('error');
                email[i].classList.remove('--border-red');
                forms[i].classList.remove('--gap-3');
            }
        }
    
        if(!errorContainer[i].classList.contains('error')) {
            btnSubmit[i].disabled = false;
        } else {
            btnSubmit[i].disabled = true;
        }
    });
    
    // submit validation
    forms[0].addEventListener('submit', (e) => {
        if(email[0].value === '' || email[i].value === null) {
            if(!errorContainer[i].classList.contains('error')) {
                errorContainer[i].classList.add('error');
            }
        } else {
            if(errorContainer[i].classList.contains('error')) {
                errorContainer[i].classList.remove('error');
            }
        }
    
        if(errorContainer[i].classList.contains('error')) {
            e.preventDefault();
        }
    });
}

// email-validation regex
function validateEmail(email) {
    const regex = /^(([^<>()äüöü\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email);
}