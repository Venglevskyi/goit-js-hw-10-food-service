import refs from '../utils/refs';
import Theme from '../components/theme';

let changeTheme;
if (localStorage.getItem('theme')) {
  changeTheme = localStorage.getItem('theme');
} else {
  changeTheme = Theme.LIGHT;
}
refs.body.classList.add(changeTheme);

function handleChangeTheme({ target }) {
  if (target.checked === true) {
    changeTheme = localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.add('dark-theme');
    refs.body.classList.remove('light-theme');
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.remove('dark-theme');
    refs.body.classList.add('light-theme');
  }
}
refs.switch.addEventListener('change', handleChangeTheme);

export default handleChangeTheme;
