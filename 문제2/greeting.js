const form = document.getElementById('login-form');
const input = form.querySelector('input');
const greeting = document.getElementById('greeting');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const name = input.value;
  greeting.textContent = 'Hello ' + name;
  greeting.classList.remove('hidden');

  
  input.value = '';
});
