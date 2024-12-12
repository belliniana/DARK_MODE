const button = document.querySelector('button');

button.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = 'DESATIVAR!!!'; 
    } else {
        button.textContent = 'ATIVAR!!!';
    }
});