const menu = document.getElementById('menu')
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', ()=>
{
  menu.classList.toggle('menu--on')
})