const navItems = document.querySelectorAll('.nav-item');

const mainPanalItem = document.querySelectorAll('.main-panal-item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(removeData => removeData.removeAttribute('data-active-nav-item'));
    
    item.setAttribute('data-active-nav-item', 'true');
    
    mainPanalItem.forEach(panal => {
      panal.classList.add('hidden');
    });
    
    const idValue = item.id;
    
    switch (idValue) {
      case 'inbox':
        document.getElementById('inbox-display').classList.remove('hidden');
        break;
      case 'group':
        document.getElementById('group-display').classList.remove('hidden');
        break;
      case 'todo':
        document.getElementById('todo-display').classList.remove('hidden');
        break;
      case 'settings':
        document.getElementById('settings-display').classList.remove('hidden');
        break;
      default:
        return false;
    }
  });
});
