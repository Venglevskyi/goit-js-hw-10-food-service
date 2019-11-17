import refs from '../utils/refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function handleChangeTheme() {
  if (refs.switch.checked === true) {
    localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}
refs.switch.addEventListener('change', handleChangeTheme);

export default handleChangeTheme;
