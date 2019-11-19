import refs from '../utils/refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let changeTheme = localStorage.getItem('theme') || Theme.LIGHT;
refs.body.classList.add(changeTheme);

function handleChangeTheme() {
  if (refs.switch.checked === true) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK)
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
refs.switch.addEventListener('change', handleChangeTheme);

export default handleChangeTheme;
