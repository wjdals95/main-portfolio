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

   // start: ICON Toggle Event
   document.querySelector('.icon-menu').addEventListener('click', () => {
      document.querySelector('.responsive-sidebar-menu').classList.add('active')
   })
   document.querySelector('.responsive-sidebar-menu .sidebar-overlay').addEventListener('click', e => {
      document.querySelector('.responsive-sidebar-menu').classList.remove('active')
   })
   // end: ICON Toggle Event

   // start: Nav Scroll Evnet
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
   // end: Nav Scroll Evnet

   // start: Go Portfilio Btn Event
   document.querySelector('.go-portfolio-btn').addEventListener('click', e => {
      e.preventDefault()

      window.scroll({
         top: portfolio.offsetTop,
         behavior: 'smooth',
      })
   })
   // end: Go Portfilio Btn Event

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

   // start: Animation
   window.addEventListener('load', () => {
      document.querySelector('.myinfo-card').classList.add('intro')
      document.querySelector('.sidebar-nav').classList.add('intro')
      document.querySelector('.home-section .custom-container').classList.add('intro')
   })

   // About Animation
   const EcontentsAbout = document.querySelector('.about-section')

   const callbackAbout = ([entry], observer) => {
      if (entry.isIntersecting) {
         const contents = entry.target.querySelectorAll('.about-section .about-text')
         ;[0, 1, 2].forEach(i => contents[i].classList.add('fade-in'))
         document.querySelector('.about-section .section-header h4').classList.add('fade-in')

         observer.disconnect(entry.target)
      }
   }
   const observerAbout = new IntersectionObserver(callbackAbout, { threshold: 0.5 })
   observerAbout.observe(EcontentsAbout)

   // Resume Animation
   const EcontentsResume = document.querySelector('.resume-section')

   const callbackResume = ([entry], observer) => {
      if (entry.isIntersecting) {
         document.querySelector('.resume-section .resume-items').classList.add('fade-in')
         const contents = entry.target.querySelectorAll('.resume-section .resume-item')
         ;[0, 1, 2, 3].forEach(i => contents[i].classList.add('fade-in'))
         document.querySelector('.resume-section .section-header').classList.add('fade-in')
         observer.disconnect(entry.target)
      }
   }
   const observerResume = new IntersectionObserver(callbackResume, { threshold: 0.5 })
   observerResume.observe(EcontentsResume)

   // My Skill Animation
   const EcontentsMySKill = document.querySelector('.myskills-section')

   const callbackMySkill = ([entry], observer) => {
      if (entry.isIntersecting) {
         const contents = entry.target.querySelectorAll('.myskills-section .skills .skill')
         ;[0, 3, 4, 7].forEach(i => contents[i].classList.add('first-in'))
         ;[1, 2, 5, 6].forEach(i => contents[i].classList.add('second-in'))
         document.querySelector('.myskills-section .section-header').classList.add('fade-in')
         observer.disconnect(entry.target)
      }
   }

   const observerMySkill = new IntersectionObserver(callbackMySkill, { threshold: 0.5 })
   observerMySkill.observe(EcontentsMySKill)

   // Portfolio Animation
   function callbackPortfolio(entries, observer) {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            document.querySelector('.portfolio-section .section-header').classList.add('fade-in')
         }
      })
   }

   const observerPortfolio = new IntersectionObserver(callbackPortfolio, { threshold: 0.2 })

   const fadeElms = document.querySelectorAll('.portfolio-item.fade')
   fadeElms.forEach(el => observerPortfolio.observe(el))

   // Contact Animation
   const EcontentsContact = document.querySelector('.contact-section')

   const callbackContact = ([entry], observer) => {
      if (entry.isIntersecting) {
         document.querySelector('.contact-section form').classList.add('fade-in')
         document.querySelector('.contact-section .section-header').classList.add('fade-in')

         observer.disconnect(entry.target)
      }
   }
   const observerContact = new IntersectionObserver(callbackContact, { threshold: 0.5 })
   observerContact.observe(EcontentsContact)
   // end: Animation
})()
