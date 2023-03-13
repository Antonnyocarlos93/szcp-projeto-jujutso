

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
     botao.addEventListener('click', () => {
       
        const botaoSelecinado = document.querySelector('.selecionado');
        botaoSelecinado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
       
        imagemAtiva.classList.remove('ativa');
        
        imagens[indice].classList.add('ativa');

    })
})
