const container = document.createElement('div');
container.className = 'container';
container.style.height = '100%';
container.style.width = '100%';
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

const contentWrapper = document.createElement('div');
contentWrapper.style.display = 'flex';
contentWrapper.style.flexDirection = 'column';
contentWrapper.style.alignItems = 'center';

const divDescricao = document.createElement('div');
divDescricao.className = 'divDescricao';
divDescricao.style.display = 'flex';
divDescricao.style.width = '300px';
divDescricao.style.height = '800px';
divDescricao.style.borderRadius = '10px';
divDescricao.style.display = 'flex';
divDescricao.style.flexDirection = 'column';
divDescricao.style.marginRight = '30px';
divDescricao.style.alignItems = 'center';

const imagem = document.createElement('img');
imagem.src = localStorage.getItem('caminho');
imagem.style.width = '100%';
divDescricao.appendChild(imagem);

const divContainer = document.createElement('div');
divContainer.style.display = 'flex';

const div = document.createElement('div');
div.className = 'div';
div.style.background = 'white';
div.style.border = '3px solid';
div.style.width = '500px';
div.style.height = '800px';
div.style.borderRadius = '10px';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignItems = 'center';

const descricao = document.createElement('h5');
descricao.innerHTML = `Descrição do jogador: ${localStorage.getItem('descricao')}`;
descricao.style.color = 'black';
descricao.style.width = '400px';
descricao.style.fontFamily = 'Inconsolata';
descricao.style.textAlign = 'center';
descricao.id = 'descricao';

const legenda = document.createElement('h5');
legenda.innerHTML = localStorage.getItem('Nome Completo');
legenda.style.textAlign = 'center';
legenda.style.fontFamily = 'Arial, sans-serif';
legenda.style.fontSize = '18px';
legenda.style.color = 'black';
legenda.style.marginBottom = '20px';

const InfoAdd = document.createElement('h5');
InfoAdd.innerHTML = `Posição do jogador: ${localStorage.getItem('posicao')}`;
InfoAdd.style.color = 'black';
InfoAdd.style.width = '400px';
InfoAdd.style.fontFamily = 'Inconsolata';
InfoAdd.style.textAlign = 'center';
InfoAdd.id = 'posicao';

const InfoAdd2 = document.createElement('h5');
InfoAdd2.innerHTML = `Altura do Jogador: ${localStorage.getItem('altura')}`;
InfoAdd2.style.color = 'black';
InfoAdd2.style.width = '400px';
InfoAdd2.style.fontFamily = 'Inconsolata';
InfoAdd2.style.textAlign = 'center';
InfoAdd2.id = 'altura';

const InfoAdd3 = document.createElement('h5');
InfoAdd3.innerHTML = `Nascimento do Jogador: ${localStorage.getItem('Data de Nascimento')}`;
InfoAdd3.style.color = 'black';
InfoAdd3.style.width = '400px';
InfoAdd3.style.fontFamily = 'Inconsolata';
InfoAdd3.style.textAlign = 'center';
InfoAdd3.id = 'nascimento';

const imagem_div = document.createElement('img');
imagem_div.src = localStorage.getItem('caminho');
imagem_div.style.position = 'relative';

const voltar = document.createElement('button');
voltar.style.borderRadius = '40px solid black';
voltar.style.marginTop = '40px';
voltar.style.color = 'black';

voltar.textContent = 'Voltar para página inicial';
voltar.addEventListener('click', function() {
  window.history.back();
});

divContainer.appendChild(divDescricao);
divContainer.appendChild(div);

div.appendChild(legenda);
div.appendChild(imagem_div);
div.appendChild(InfoAdd);
div.appendChild(InfoAdd2);
div.appendChild(InfoAdd3);
div.appendChild(descricao);
div.appendChild(voltar);

contentWrapper.appendChild(divContainer);
container.appendChild(contentWrapper);

function ImagemNoLugar() {
  const larguraDaTela = window.innerWidth;

  if (larguraDaTela < 768) {
    divDescricao.style.display = 'none';
    divContainer.style.flexDirection = 'column';
    div.appendChild(imagem_div);
    div.appendChild(descricao);
    div.appendChild(InfoAdd);
    div.appendChild(InfoAdd2);
    div.appendChild(InfoAdd3);
    div.appendChild(voltar);
  } else {
    if (div.contains(imagem_div)) {
      div.removeChild(imagem_div);
    }
    divDescricao.style.display = 'grid';
    divContainer.style.flexDirection = 'row';
  }
}

window.addEventListener('resize', ImagemNoLugar);

ImagemNoLugar();

document.body.appendChild(container);


