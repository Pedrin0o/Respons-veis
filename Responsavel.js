document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const tipo = document.getElementById('tipo').value;
        if (!tipo) {
            alert('Por favor, selecione o tipo de usuário.');
            event.preventDefault(); // Impede envio do formulário se o campo não for preenchido
        }
    });
});
