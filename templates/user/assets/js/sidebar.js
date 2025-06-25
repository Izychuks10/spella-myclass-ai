
const sidebarItem = document.querySelectorAll('.sidebar-item-1');

  sidebarItem.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all items
      sidebarItem.forEach(i => i.classList.remove('active'));
      // Add active class to clicked item
      item.classList.add('active');
    });
});

const sidebarMenu = document.querySelectorAll('.side-dr0p');

  sidebarMenu.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all items
      sidebarItem.forEach(i => i.classList.remove('active'));
      // Add active class to clicked item
      item.classList.add('active');
    });
});

//   menu section


  function toggleMenu(id, event) {
    // Prevent submenu links from triggering toggle
    if (event.target.closest('.submenu')) return;

    const allMenus = document.querySelectorAll('.submenu');
    const currentMenu = id ? document.getElementById(id) : null;

    const isAlreadyOpen = currentMenu?.classList.contains('open');

    // Close all submenus
    allMenus.forEach(menu => {
      menu.style.height = '0';
      menu.classList.remove('open');
    });

    // If currentMenu exists and wasn't already open, open it
    if (currentMenu && !isAlreadyOpen) {
      currentMenu.style.height = currentMenu.scrollHeight + 'px';
      currentMenu.classList.add('open');
    }
  }

