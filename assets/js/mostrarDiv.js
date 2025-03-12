function mostrarDiv(id) {
    let divs = document.querySelectorAll('.container.mt-3');
    
    divs.forEach(div => {
        div.classList.add('oculto'); // Oculta todas
        div.classList.remove('fade-in'); // Remove a animação anterior
    });

    let divAtiva = document.getElementById(id);
    divAtiva.classList.remove('oculto'); // Exibe a div
    divAtiva.classList.add('fade-in'); // Aplica efeito fade
}