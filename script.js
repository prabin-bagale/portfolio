const menuicon =document.querySelector('#menu-icon');
const navlinks =document.querySelector('.nav-link')

menuicon.onclick= () => {
    navlinks.classList.toggle('active')
}

console.log('hello')