const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

passwordInput.addEventListener('blur', checkPassword);
passwordInput.addEventListener('input', checkPasswordStrength);
confirmPasswordInput.addEventListener('blur', checkPassword);

function checkPassword(e) {
  confirmPasswordInput.parentNode.classList.remove('validated');
  confirmPasswordInput.parentNode.classList.remove('error');
  if (confirmPasswordInput.value === '') {
    return;
  }

  if (confirmPasswordInput.value === passwordInput.value) {
    confirmPasswordInput.parentNode.classList.add('validated');
  } else {
    confirmPasswordInput.parentNode.classList.add('error');
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
  const allPatterns = [
    { pattern: normal, strength: 10 },
    { pattern: capital, strength: 10 },
    { pattern: specialCharacter, strength: 5 },
    { pattern: number, strength: 5 },
  ];

  allPatterns.forEach((pattern) => {
    if (pattern.pattern.test(e.target.value)) {
      strength += pattern.strength;
    }
  });

  console.log(strength);
}
