import refreshList from './components/menu';
import database from './database/menu.json';
import refs from './utils/refs';
import handleChangeTheme from './components/changeTheme';

refreshList(database, refs.menu);
handleChangeTheme();
