const menuItems = document.querySelectorAll('.link a')
const mobileMenu = document.querySelector('.menu-items')

menuItems.forEach((item) => {
  item.addEventListener('click', event => {
    event.preventDefault()

    closeMobileMenu()

    const element = event.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop

    window.scroll({
      top: to,
      behavior: "smooth"
    })
  })
})

function closeMobileMenu() {
  toogleButton.classList.remove('fa-times')
  toogleButton.classList.add('fa-bars')
  
  menu.classList.remove('menu-items-active')
  menu.classList.add('menu-items-disable')
}