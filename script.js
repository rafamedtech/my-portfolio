const darkModeBtn = document.getElementById('btn');
const darkModeItem = document.querySelector('.button-item');

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   darkModeItem.style.display = 'none';
// }

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  document.body.classList.add('dark');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark');
  localStorage.setItem('darkMode', null);
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

  if (document.body.classList.contains('dark')) {
    darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
});
