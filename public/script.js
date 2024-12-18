document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('main-content')
    
    async function loadPage(page) {
      const response = await fetch(`/${page}`)
      const data = await response.json()
      contentDiv.innerHTML = data.content
    }
  
    document.querySelectorAll('a[data-link]').forEach(link => {
      link.addEventListener('click', (event) => {
        const page = event.target.getAttribute('data-link')
        loadPage(page)
        history.pushState(null, '', `/${page}`)
        event.preventDefault()
      })
    })

    window.addEventListener('popstate', () => {
      const page = window.location.pathname.substring(1) || 'home'
      loadPage(page)
    })
  
    const initialPage = window.location.pathname.substring(1) || 'home'
    loadPage(initialPage)
})
  
document.addEventListener("DOMContentLoaded", function() {
  const sidenavToggle = document.querySelector(".sidenav-toggle")
  const sidenav = document.querySelector(".sidenav")
  const blackSquare = document.querySelector(".black-square")
  const buttons = document.querySelectorAll(".button")

  let currentInput = ""
  let isDatePart1Complete = false


  sidenavToggle.addEventListener("click", function() {
      sidenav.classList.toggle("collapsed")

      const header = document.querySelector("header")
      if (sidenav.classList.contains("collapsed")) {
          header.style.marginLeft = "0"
          header.style.width = "100%"
      } else {
          header.style.marginLeft = "20%"
          header.style.width = "calc(100% - 20%)"
      }
  })


  buttons.forEach(button => {
      button.addEventListener("click", function() {
          if (currentInput.length >= 5) return

          if (currentInput.length < 2) {
              currentInput += button.textContent.trim()
              blackSquare.textContent = currentInput

          } else if (currentInput.length === 2 && !isDatePart1Complete) {
              currentInput += '/'
              isDatePart1Complete = true
              blackSquare.textContent = currentInput

          } else if (currentInput.length > 2 && currentInput.length < 5) {
              currentInput += button.textContent.trim()
              blackSquare.textContent = currentInput
          }
      })
  })

  window.clearDisplay = function() {
      currentInput = ""
      isDatePart1Complete = false
      blackSquare.textContent = ''
  }
})
