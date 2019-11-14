import refs from '../utils/refs';
import Theme from '../components/theme';

function handleChangeTheme() {
  let changeTheme = localStorage.getItem('theme') || 'light-theme';
  if (changeTheme === Theme.LIGHT) {
      localStorage.setItem('theme', 'dark-theme')
      refs.switch.checked = false;
      refs.body.classList.add('light-theme');
      refs.body.classList.remove('dark-theme');
  } else if (changeTheme === Theme.DARK) {
          localStorage.setItem('theme', 'light-theme')
          refs.switch.checked = true;
          refs.body.classList.remove('light-theme');
          refs.body.classList.add('dark-theme');
      }
      return changeTheme;
  }

refs.switch.addEventListener('change', handleChangeTheme);

export default handleChangeTheme;
