const container = document.createElement('div');
container.className = 'container';
container.style.display = 'grid';

container.style.width = '100%'
container.style.height = '100%';
container.style.justifyContent =' center';
container.style.alignItems ='center';

const div = document.createElement('div');
div.className = 'div';
div.style.background = 'white';
div.style.border = '3px solid ';
div.style.width = '700px';
div.style.height = '800px';
div.style.borderRadius = '10px';


const descricao = document.createElement('h5');
descricao.innerHTML = `Descrição do jogador: ${localStorage.getItem('descricao')}`;
descricao.style.color = 'black';
descricao.style.width = '550px';
descricao.style.marginLeft = ' 100px';
descricao.style.fontFamily = 'Inconsolata';
const legenda = document.createElement('h5');
legenda.innerHTML = localStorage.getItem('Nome Completo');
legenda.style.textAlign = 'center';
legenda.style.fontFamily = 'Arial, sans-serif';
legenda.style.fontSize = '18px';
legenda.style.color = 'black';

const InfoAdd = document.createElement('h5');
InfoAdd.innerHTML = `Posição do jogador: ${localStorage.getItem('posicao')}`;
InfoAdd.style.color = 'black';
InfoAdd.style.width = '400px';
InfoAdd.style.marginLeft = ' 100px';
InfoAdd.style.fontFamily = 'Inconsolata';
const InfoAdd2 = document.createElement('h5');
InfoAdd2.innerHTML = `Altura do Jogador: ${localStorage.getItem('altura')}`;
InfoAdd2.style.color = 'black';
InfoAdd2.style.width = '400px';
InfoAdd2.style.marginLeft = ' 100px';
InfoAdd2.style.fontFamily = 'Inconsolata';

const divDescricao = document.createElement('div');
divDescricao.className = 'divDescricao';
divDescricao.style.background = 'black';
divDescricao.style.border = '3px solid ';
divDescricao.style.width = '700px';
divDescricao.style.height = '800px';
divDescricao.style.borderRadius = '10px';


const imagem = document.createElement('img');
imagem.src = localStorage.getItem('caminho');
imagem.style.width = 'fit-content';


divDescricao.appendChild(imagem);
div.appendChild(legenda);
div.appendChild(descricao);
div.appendChild(InfoAdd);
div.appendChild(InfoAdd2);

container.appendChild(divDescricao);
container.appendChild(div);

const voltar = document.createElement('button');
voltar.style.backgroundColor = 'gray';
voltar.style.borderRadius = '40px';
voltar.style.marginLeft = '250px';
voltar.style.marginTop = '40px';

voltar.textContent = 'Voltar para página inicial';
voltar.addEventListener('click', function() {
  window.history.back();
});

div.appendChild(voltar);

document.body.appendChild(container);

