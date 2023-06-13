const container = document.createElement('div');
container.style.display = 'grid';
container.style.gridTemplateColumns = '1fr 1fr';



const div = document.createElement('div');
div.style.background = '#fff';
div.style.border = '3px solid #000';
div.style.borderRadius = '0';
div.style.boxShadow = '15px 15px 0 -2.5px #fff, 15px 15px 0 0 #000';
div.style.width = '700px';

div.style.height = '800px';


const imagem = document.createElement('img');
const legenda = document.createElement('h5');
const descricao = document.createElement('h5');
descricao.innerHTML = localStorage.getItem('descricao');
descricao.style.color = 'black';
descricao.style.width = '400px';
descricao.style.marginLeft = ' 100px';
imagem.src = localStorage.getItem('caminho');
imagem.style.width = '40%';
imagem.style.height = '60%';

legenda.innerHTML = localStorage.getItem('nome');
legenda.style.textAlign = 'center';
legenda.style.fontFamily = 'Arial, sans-serif';
legenda.style.fontSize = '18px';
legenda.style.color = 'black';

const divDescricao = document.createElement('div');
divDescricao.style.display = 'flex';
divDescricao.style.flexDirection = 'column';
divDescricao.style.alignItems = 'center';
divDescricao.style.justifyContent = 'center';
divDescricao.style.color = '#fff';

divDescricao.style.width = '100%';
divDescricao.style.height = '100%';
divDescricao.style.fontSize = '20px';
divDescricao.style.fontWeight = '900';


divDescricao.appendChild(imagem);
div.appendChild(legenda);
div.appendChild(descricao);
document.body.appendChild(divDescricao);

container.appendChild(divDescricao);
container.appendChild(div);

const voltar = document.createElement('button');
voltar.style.backgroundColor = 'gray';
voltar.style.borderRadius = '40px';

voltar.textContent = 'Voltar para página inicial';
voltar.addEventListener('click', function() {
  window.history.back();
});

div.appendChild(voltar);

document.body.appendChild(container);

