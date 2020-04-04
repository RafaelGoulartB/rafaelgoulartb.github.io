const toogleButton = document.getElementById('toogle-menu')
const menu = document.querySelector('.menu-items')

toogleButton.addEventListener('click', () => {
  if(menu.classList.contains('menu-items-active')) {
    // Close
    toogleButton.classList.remove('fa-times')
    toogleButton.classList.add('fa-bars')
    
    menu.classList.remove('menu-items-active')
    menu.classList.add('menu-items-disable')
  } else {
    // Open
    toogleButton.classList.remove('fa-bars')
    toogleButton.classList.add('fa-times')

    menu.classList.remove('menu-items-disable')
    menu.classList.add('menu-items-active')
  }
})
