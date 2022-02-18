const navbar = document.querySelector('.navbar')
const navbarHeight = navbar.offsetHeight / 3
const navLinks = navbar.querySelector('.navLinks')
const burger = document.querySelector('.burger')

const productsWrapper = document.querySelector('.products')
const seeAllBtn = productsWrapper.querySelector('header button')
const products = productsWrapper.querySelectorAll('.newItems')

const buyBtns = document.querySelectorAll('.buyBtn')

//modal
buyBtns.forEach(el => {
   el.addEventListener('click', () => {
      document.querySelector('body').classList.add('noScroll')
      document.querySelector('body').insertAdjacentHTML(
         'beforeend',
         `
         <div class="modal">
            <div class="backdrop">
               <div class="info">
                  <h3>Thanks you for order!</h3>
                  <img src="./emoji.png" alt="img" />
               </div>
            </div>
         </div>
      `
      )
      setTimeout(() => (document.querySelector('.backdrop').style.top = '0'), 10)
   })
})

window.addEventListener('click', event => {
   if (event.target.classList.contains('backdrop')) {
      document.querySelector('.backdrop').style.top = '-100%'
      setTimeout(() => document.querySelector('.modal').remove(), 400)
      document.querySelector('body').classList.remove('noScroll')
   }
})

//see all
seeAllBtn.addEventListener('click', event => {
   if (productsWrapper.style.marginBottom == '175px') productsWrapper.style.marginBottom = '130px'
   else productsWrapper.style.marginBottom = '175px'

   if (event.target.innerText == 'Close') event.target.innerText = 'See all'
   else event.target.innerText = 'Close'

   setTimeout(() => {
      products.forEach(el => {
         el.classList.toggle('hide')
      })
   }, 100)
})

//navbar
burger.addEventListener('click', () => {
   navLinks.classList.toggle('active')
   document.querySelector('body').classList.toggle('noScroll')
})

navLinks.querySelectorAll('.linkItem').forEach(
   el =>
      (el.onclick = () => {
         navLinks.classList.remove('active')
         document.querySelector('body').classList.remove('noScroll')
      })
)
document.querySelector('.logo').onclick = () => {
   navLinks.classList.remove('active')
   document.querySelector('body').classList.remove('noScroll')
}

window.onscroll = () => {
   document.documentElement.scrollTop > navbarHeight
      ? navbar.classList.add('fixed')
      : navbar.classList.remove('fixed')
}
