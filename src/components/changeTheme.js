import refs from '../utils/refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function handleChangeTheme() {
  let changeTheme = localStorage.getItem('theme') || Theme.LIGHT;
  refs.body.classList.add(changeTheme);
  if (refs.switch.checked === true) {
    changeTheme = localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
  } else {
    changeTheme = localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
  }
}
refs.switch.addEventListener('change', handleChangeTheme);

export default handleChangeTheme;
