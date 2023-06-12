const div = document.createElement('div');
const imagem = document.createElement('img');
const legenda = document.createElement('h5');
const descricao = document.createElement('h5');

imagem.src = localStorage.getItem('caminho');
imagem.position = 'relative';

legenda.innerHTML = localStorage.getItem('nome');
legenda.style.alignItems = 'center';

descricao.innerHTML= localStorage.getItem('descricao');

div.appendChild(descricao);
div.appendChild(imagem);
div.appendChild(legenda);
document.body.appendChild(div);
