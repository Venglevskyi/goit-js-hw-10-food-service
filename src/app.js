import refreshList from './components/menu';
import database from './database/menu.json';
import refs from './utils/refs';
import handleChangeTheme from './components/changeTheme';
import Theme from './components/theme';

refs.switch.checked = false;
localStorage.setItem('theme', Theme.DARK);
refreshList(database, refs.menu);
handleChangeTheme;


