document.addEventListener('DOMContentLoaded', () => {
  historyBack()
  sidebarToggle()
})

function historyBack() {
  document.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', (event) => {
      let page = event.target.getAttribute('data-link')
      if (page === "profile" && !localStorage.getItem('username')) 
        page = "login"
      loadPage(page)
      history.pushState(null, '', `/${page}`)
      event.preventDefault()
    })
  })

  window.addEventListener('popstate', ()=> {
    const page = window.location.pathname.substring(1) || 'home'
    loadPage(page)
  })

  const initialPage = window.location.pathname.substring(1) || 'home'
  loadPage(initialPage)
}

function sidebarToggle() {
  const sidenavToggle = document.querySelector(".sidenav-toggle")
  const sidenav = document.querySelector(".sidenav")

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
})}

async function loadPage(page) {
  const contentDiv = document.getElementById('main-content')
  const response = await fetch(`/page/${page}`)
  const data = await response.json()
  contentDiv.innerHTML = data.content

  document.body.querySelectorAll('script').forEach(script => {
    script.remove()
  })
  
  if (page === "home") {
    const script = document.createElement("script")
    script.src = "./scripts/tmButtons.js"
    script.defer = true
    document.body.appendChild(script)
  } else if (page === "login") {
    const script = document.createElement("script")
    script.src = "./scripts/login.js"
    script.defer = true
    document.body.appendChild(script)
  } else if (page=== "profile") {
    const script = document.createElement("script")
    script.src = "./scripts/profile.js"
    script.defer = true
    document.body.appendChild(script)
  }
  
}
