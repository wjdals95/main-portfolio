;(() => {
   const home = document.querySelector('#home')
   const about = document.querySelector('#about')
   const resume = document.querySelector('#resume')
   const mySkills = document.querySelector('#myskills')
   const portfolio = document.querySelector('#portfolio')
   const contact = document.querySelector('#contact')
   const section = [home, about, resume, mySkills, portfolio, contact]
   const sidebarNav = document.querySelectorAll('.nav-click')
   const responsiveSidebarNav = document.querySelectorAll('.respon-nav-click')

   // ICON Toggle Event
   document.querySelector('.icon-menu').addEventListener('click', () => {
      document.querySelector('.responsive-sidebar-menu').classList.add('active')
   })
   document.querySelector('.responsive-sidebar-menu .sidebar-overlay').addEventListener('click', e => {
      document.querySelector('.responsive-sidebar-menu').classList.remove('active')
   })

   // Nav Scroll Evnet
   for (let i = 0; i < sidebarNav.length; i++) {
      sidebarNav[i].addEventListener('click', e => {
         e.preventDefault()
         window.scroll({
            top: section[i].offsetTop,
            behavior: 'smooth',
         })
      })
   }

   for (let i = 0; i < responsiveSidebarNav.length; i++) {
      responsiveSidebarNav[i].addEventListener('click', e => {
         e.preventDefault()
         window.scroll({
            top: section[i].offsetTop,
            behavior: 'smooth',
         })
         setTimeout(() => {
            document.querySelector('.responsive-sidebar-menu').classList.remove('active')
         }, 500)
      })
   }

   function navScroll() {
      let y = window.pageYOffset
      for (let i = 0; i < sidebarNav.length; i++) {
         let sectionOffsetTop = section[i].offsetTop
         let sectionOffsetHeight = section[i].offsetHeight

         if (y >= sectionOffsetTop && y < sectionOffsetTop + sectionOffsetHeight) {
            sidebarNav[i].classList.add('active')
         } else {
            sidebarNav[i].classList.remove('active')
         }
      }
      for (let i = 0; i < responsiveSidebarNav.length; i++) {
         let sectionOffsetTop = section[i].offsetTop
         let sectionOffsetHeight = section[i].offsetHeight

         if (y >= sectionOffsetTop && y < sectionOffsetTop + sectionOffsetHeight) {
            responsiveSidebarNav[i].classList.add('active')
         } else {
            responsiveSidebarNav[i].classList.remove('active')
         }
      }
   }

   // Go Portfilio Btn Event
   document.querySelector('.go-portfolio-btn').addEventListener('click', e => {
      e.preventDefault()

      window.scroll({
         top: portfolio.offsetTop,
         behavior: 'smooth',
      })
   })

   // start: Portfolio
   document.querySelectorAll('[data-toggle="portfolio-item"]').forEach(el => {
      el.addEventListener('click', function (e) {
         e.preventDefault()

         document.querySelector('.portfolio-detail').classList.add('show')

         document.querySelectorAll('.porfolio-detail-item').forEach(item => item.classList.remove('active'))
         document.querySelector(this.dataset.target).classList.add('active')
      })
   })

   document.querySelector('.portfolio-detail .close').addEventListener('click', () => {
      document.querySelector('.portfolio-detail').classList.remove('show')
      document.querySelectorAll('.porfolio-detail-item').classList.remove('active')
   })

   document.querySelector('.portfolio-detail .slider-overlay').addEventListener('click', () => {
      document.querySelector('.portfolio-detail').classList.remove('show')
      document.querySelectorAll('.porfolio-detail-item').classList.remove('active')
   })
   // end: Portfolio

   window.addEventListener('click', e => {
      navClick()
   })

   window.addEventListener('scroll', () => {
      setTimeout(navScroll, 500)
   })
   window.addEventListener('load', () => {
      document.querySelector('.myinfo-card').classList.add('intro')
      document.querySelector('.sidebar-nav').classList.add('intro')
      document.querySelector('.home-section .custom-container').classList.add('intro')
   })
})()
