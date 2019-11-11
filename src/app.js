import refreshList from './components/menu';
import data from './database/menu.json';
import refs from './utils/refs';
import handleChangeTheme from './components/theme';

refreshList(data, refs.menu);
handleChangeTheme();


// const themeColor = localStorage.setItem('Theme', Theme.LIGHT);

// if (localStorage.getItem(themeColor)|| data) {
//   return localStorage;
// }
