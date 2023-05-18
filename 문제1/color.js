const dropdown = document.getElementById('color-dropdown');
const heading = document.querySelector('h1');


dropdown.addEventListener('change', function() {
  const selectedColor = dropdown.value;
  heading.style.color = selectedColor;
});
