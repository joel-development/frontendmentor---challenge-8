const menu = document.getElementById('menu')
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', ()=>
{
  menu.classList.toggle('menu--on')
})
window.addEventListener('scroll',()=>
{
  if(menu.classList.contains('menu--on'))
  {
    menu.classList.remove('menu--on')
  }
  if(window.scrollY > window.innerHeight - 100)
  {
    header.classList.add('header--scroll-bg')
  }
  else
  {
    header.classList.remove('header--scroll-bg')
  }
})