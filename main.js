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

function checkPasswordStrength(e) {}
