const container = document.createElement('div');
container.className = 'container';
container.style.height = '100%';
container.style.width = '100%';
container.style.justifyContent =' center';
container.style.alignItems ='center';

const div = document.createElement('div');
div.className = 'div';
div.style.background = 'white';
div.style.border = '3px solid ';
div.style.width = '700px';
div.style.height = '800px';
div.style.borderRadius = '10px';
div.style.alignItems = 'center';

const divDescricao = document.createElement('div');
divDescricao.className = 'divDescricao';
divDescricao.style.display = 'grid';
divDescricao.style.placeItems = 'center';
divDescricao.style.background = 'black';
divDescricao.style.width = 'fit-content';
divDescricao.style.height = 'fit-content';
divDescricao.style.border = '3px solid ';
divDescricao.style.borderRadius = '10px';
divDescricao.style.display = 'block';
divDescricao.style.margin = '0 auto';

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

const InfoAdd3 = document.createElement('h5');
InfoAdd3.innerHTML = `Nascimento do Jogador: ${localStorage.getItem('Data de Nascimento')}`;
InfoAdd3.style.color = 'black';
InfoAdd3.style.width = '400px';
InfoAdd3.style.marginLeft = ' 100px';

const imagem = document.createElement('img');
imagem.src = localStorage.getItem('caminho');

divDescricao.appendChild(imagem);

div.appendChild(legenda);



container.appendChild(divDescricao);
container.appendChild(div);

const voltar = document.createElement('button');
voltar.style.borderRadius = '40px solid  black';
voltar.style.marginLeft = '250px';
voltar.style.marginTop = '40px';
voltar.style.color = 'black';

voltar.textContent = 'Voltar para página inicial';
voltar.addEventListener('click', function() {
  window.history.back();
});
div.appendChild(descricao);
div.appendChild(InfoAdd);
div.appendChild(InfoAdd2);
div.appendChild(InfoAdd3);
div.appendChild(voltar);

function ImagemNoLugar() {
  const larguraDaTela = window.innerWidth;

  if (larguraDaTela < 768) {
    divDescricao.style.display = 'none';
    div.appendChild(imagem);
    div.appendChild(descricao);
    div.appendChild(InfoAdd);
    div.appendChild(InfoAdd2);
    div.appendChild(InfoAdd3);
    div.appendChild(voltar);
  } else {
    divDescricao.style.display = 'grid';
    divDescricao.appendChild(imagem);
  }
}

window.addEventListener('resize', ImagemNoLugar);

ImagemNoLugar();

document.body.appendChild(container);

