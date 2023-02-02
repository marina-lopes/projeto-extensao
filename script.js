let botaoEl = document.querySelectorAll('.botoes');
let botaoFechar = document.querySelectorAll('#fechar');

let secaoPorQueEl = document.querySelector('#secao-porque');
let secaoSobreMimEl = document.querySelector('#secao-sobremim');
let secaoExpectativasEl = document.querySelector('#secao-expectativas');

let fundoEl = document.querySelector('main');

let botoes = [
    {
        container: secaoPorQueEl,
    },
    {
        container: secaoSobreMimEl,
    },
    {
        container: secaoExpectativasEl,
    },
];

for (let i = 0; i < botaoEl.length; i++) {
    botaoEl[i].addEventListener('click', () => {
      botoes[i].container.classList.remove('invisivel');
      fundoEl.classList.add('invisivel');
    });
  
    fechar[i].addEventListener('click', () => {
      botoes[i].container.classList.add('invisivel');
      fundoEl.classList.remove('invisivel');
    });
  }