import refs from '../utils/refs';C

function handleChangeTheme({ target }) {
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  if (target.checked === true) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  }
  if (target.checked === false) {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}
refs.body.addEventListener('change', handleChangeTheme);

export default handleChangeTheme;
