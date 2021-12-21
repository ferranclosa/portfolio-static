// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const toggles = document.querySelectorAll('.faq-toggle')


// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

const panels = document.querySelectorAll('.cards-panel')

panels.forEach ((one) =>{
  console.log(one)
  one.addEventListener('click', () => {
    removeActiveClasses()
    one.classList.add('active')
  }
  )
 
})

function removeActiveClasses () {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}


toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
      toggle.parentNode.classList.toggle('active')
    })
})