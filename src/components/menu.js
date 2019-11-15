import template from '../templates/menu-items.hbs';

function refreshList(data, root) {
  const htmlMarkup = data.map(e => template(e)).join('\n');
  root.insertAdjacentHTML('afterbegin', htmlMarkup);
}

export default refreshList;
