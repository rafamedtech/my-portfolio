const darkModeBtn = document.getElementById('btn');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
});
