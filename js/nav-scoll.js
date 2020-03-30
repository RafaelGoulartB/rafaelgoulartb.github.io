const menuItems = document.querySelectorAll('.link a')

menuItems.forEach((item) => {
  item.addEventListener('click', event => {
    event.preventDefault()

    const element = event.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop

    window.scroll({
      top: to,
      behavior: "smooth"
    })
  })
})

console.log('tes')