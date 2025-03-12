fetch('alemao/navbar.html')
    .then(response => response.text())
    .then(html => document.getElementById('navbar-container').innerHTML = html)

fetch('alemao/lateral.html')
    .then(response => response.text())
    .then(html => document.getElementById('lateral-container').innerHTML = html)

fetch('alemao/navButton.html')
    .then(response => response.text())
    .then(html => document.getElementById('navbutton-container').innerHTML = html)

fetch('alemao/calendario.html')
    .then(response => response.text())
    .then(html => document.getElementById('calendario-container').innerHTML = html)

fetch('wendy/navbar.html')
    .then(response => response.text())
    .then(html => document.getElementById('navbar-container-wendy').innerHTML = html)

fetch('wendy/lateral.html')
    .then(response => response.text())
    .then(html => document.getElementById('lateral-container-wendy').innerHTML = html)

fetch('wendy/navButton.html')
    .then(response => response.text())
    .then(html => document.getElementById('navbutton-container-wendy').innerHTML = html)

fetch('wendy/calendario.html')
    .then(response => response.text())
    .then(html => document.getElementById('calendario-container').innerHTML = html)