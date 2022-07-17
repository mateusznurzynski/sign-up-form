const meter = document.querySelector('meter');
const inputs = document.querySelectorAll('.input-wrapper input');
const passwordInput = document.querySelector('#password');

inputs.forEach((input) => {
  input.addEventListener('blur', validateInput);
});
passwordInput.addEventListener('input', checkPasswordStrength);

function checkPasswordStrength(e) {
  if (e.target.value.length < 0) {
    return;
  }
  let strength = 0;
  const normal = /[a-z]/;
  const capital = /[A-Z]/;
  const specialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const number = /[0-9]/;
  const characters = /(?=^.{8,}$)/;
  const allPatterns = [
    { pattern: normal, strength: 10 },
    { pattern: capital, strength: 10 },
    { pattern: specialCharacter, strength: 5 },
    { pattern: number, strength: 5 },
    { pattern: characters, strength: 10 },
  ];

  allPatterns.forEach((pattern) => {
    if (pattern.pattern.test(e.target.value)) {
      strength += pattern.strength;
    }
  });
  meter.value = strength;
}

function validateInput(e) {
  let valid;
  const errorMessage = e.target.getAttribute('data-error-message');
  e.target.parentNode.classList.remove('validated');
  if (errorMessage) {
    e.target.parentNode.classList.remove(errorMessage);
  }
  if (e.target.value === '') {
    return;
  }

  if (errorMessage === 'no-match') {
    //Password confirmation
    valid = e.target.value === passwordInput.value ? true : false;
  } else {
    valid = e.target.checkValidity();
  }

  if (valid) {
    e.target.parentNode.classList.add('validated');
  } else if (errorMessage) {
    e.target.parentNode.classList.add(errorMessage);
  }
}
