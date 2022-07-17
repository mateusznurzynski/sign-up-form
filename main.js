const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const emailInput = document.querySelector('#email');
const meter = document.querySelector('meter');

passwordInput.addEventListener('blur', checkPassword);
passwordInput.addEventListener('input', checkPasswordStrength);
confirmPasswordInput.addEventListener('blur', checkPassword);
emailInput.addEventListener('blur', checkEmail);

function checkEmail(e) {
  e.target.classList.remove('validated');
  e.target.classList.remove('incorrect-email');
  if (e.target.value === '') {
    return;
  }
  const valid = e.target.checkValidity();
  if (valid) {
    e.target.parentNode.classList.add('validated');
  } else {
    e.target.parentNode.classList.add('incorrect-email');
  }
}

function checkPassword(e) {
  confirmPasswordInput.parentNode.classList.remove('validated');
  confirmPasswordInput.parentNode.classList.remove('no-match');
  if (confirmPasswordInput.value === '') {
    return;
  }

  if (confirmPasswordInput.value === passwordInput.value) {
    confirmPasswordInput.parentNode.classList.add('validated');
  } else {
    confirmPasswordInput.parentNode.classList.add('no-match');
  }
}

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
