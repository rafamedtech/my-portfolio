// Supabase setup

const darkModeBtn = document.getElementById('btn');
const darkModeItem = document.querySelector('.button-item');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  darkModeItem.style.display = 'block';
  darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
} else {
  darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  document.body.classList.add('dark');
  localStorage.setItem('darkMode', 'enabled');
  darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
};

const disableDarkMode = () => {
  document.body.classList.remove('dark');
  localStorage.setItem('darkMode', null);
  darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeBtn.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
