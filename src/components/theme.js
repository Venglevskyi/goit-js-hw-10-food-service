import refs from '../utils/refs';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

function handleChangeTheme({ target }) {
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

const storage = localStorage.setItem('Theme', JSON.stringify(Theme));
console.log(storage);

export default handleChangeTheme;
