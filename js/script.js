window.onload = function () {
    const toggleButton = document.getElementById('toggle-Button');
    const navList = document.getElementById('navListOne')
    
    toggleButton.addEventListener('click', () => {
        navList.classList.toggle('active');
    })
}

function salvarDados() {

    var salvarNome = document.getElementById('nome');
    var salvarEmail = document.getElementById('email');

    var dados = JSON.parse(localStorage.getItem('dadosSalvos'));

    if (dados  == null) {
        localStorage.setItem('dadosSalvos', '[]')
        dados = [];
    }

    var registro = {
        nameCad: nome.value,
        emailCad: email.value
    }

    dados.push(registro);

    localStorage.setItem('dadosSalvos', JSON.stringify(dados));
    alert("Seus dados foram cadastrados com sucesso, você irá receber nossas novidades em breve!!")

    nome.value = "";
    email.value = "";
}