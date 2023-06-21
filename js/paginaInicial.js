const Header = document.getElementById('header');
Header.style.backgroundColor = 'white';
Header.style.padding = '20px';
Header.style.display = 'grid';
Header.style.gridTemplateColumns = '1fr 1fr 1fr';
Header.style.alignItems = 'center';
Header.style.position = 'absolute';
Header.style.top = '0';
Header.style.left = '0';
Header.style.zIndex = '1';
Header.style.width = '100%';
Header.style.margin = '0 auto';

const group = document.createElement('div');
group.style.display = 'flex';
group.style.lineHeight = '28px';
group.style.position = 'relative';
group.style.width = '150px';
group.style.marginLeft = '30px';
group.classList.add('group');

const input = document.createElement('input');
input.style.width = '100%';
input.style.height = '40px';
input.style.lineHeight = '28px';
input.style.padding = '0 1rem';
input.style.paddingLeft = '2.5rem';
input.style.border = '2px solid transparent';
input.style.borderRadius = '8px';
input.style.outline = 'none';
input.style.backgroundColor = '#f3f3f4';
input.style.color = '#0d0c22';
input.style.transition = '.3s ease';
input.setAttribute('placeholder', 'Buscar ');
input.setAttribute('type', 'search');
input.classList.add('input');

group.appendChild(input);

const Menu = document.createElement('nav');
Menu.style.display = 'flex';
Menu.style.justifyContent = 'flex-end';
Menu.classList.add('menu');

const paginaElencoMasc = document.createElement('div');
paginaElencoMasc.id = 'paginaElencoMasc';
paginaElencoMasc.style.padding = '20px';
paginaElencoMasc.style.marginRight = '5px';
paginaElencoMasc.style.border = '2px solid trasparent';
paginaElencoMasc.style.borderRadius = '8px';
paginaElencoMasc.style.outline = 'none';
paginaElencoMasc.style.backgroundColor = '#f3f3f4';
paginaElencoMasc.style.color = '#0d0c22';
paginaElencoMasc.style.transition = '.3s ease';

const LinkMasc = document.createElement('a');
LinkMasc.href = 'masculino.html';
LinkMasc.id = 'linkmasc';
LinkMasc.textContent = 'Elenco Masculino';

const paginaElencoFem = document.createElement('div');
paginaElencoFem.id = 'paginaElencoFem';
paginaElencoFem.style.padding = '20px';
paginaElencoFem.style.border = '2px solid transparent';
paginaElencoFem.style.borderRadius = '8px';
paginaElencoFem.style.outline = 'none';
paginaElencoFem.style.backgroundColor = '#f3f3f4';
paginaElencoFem.style.color = '#0d0c22';
paginaElencoFem.style.transition = '.3s ease';

const LinkFem = document.createElement('a');
LinkFem.href = 'feminino.html';
LinkFem.id = 'linkfem';
LinkFem.textContent = 'Elenco Feminino';

LinkMasc.style.margin = '0 10px';
LinkFem.style.margin = '0 10px';
LinkMasc.style.textDecoration = 'none';
LinkFem.style.textDecoration = 'none';
LinkMasc.style.color = '#333';
LinkFem.style.color = '#333';
input.style.marginRight = '10px';

paginaElencoFem.appendChild(LinkFem);
paginaElencoMasc.appendChild(LinkMasc);

Menu.appendChild(paginaElencoMasc);
Menu.appendChild(paginaElencoFem);

Header.appendChild(group);
Header.appendChild(Menu);

const hamburgerButton = document.createElement('button');
hamburgerButton.style.display = 'block'; 
hamburgerButton.classList.add('hamburger-button');
hamburgerButton.style.border = 'none';
hamburgerButton.textContent = '☰'; 
hamburgerButton.style.backgroundColor = 'transparent';
hamburgerButton.style.cursor = 'pointer';
hamburgerButton.style.position = 'absolute';
hamburgerButton.style.top = '20px';
hamburgerButton.style.right = '20px';
hamburgerButton.style.fontSize = '30px';
Header.appendChild(hamburgerButton);

let menuVisible = false; 

const menu = document.createElement('div');
menu.style.display = 'none';
menu.style.position = 'absolute';
menu.style.top = '60px';
menu.style.right = '30px';
menu.style.backgroundColor = '#f3f3f4';
menu.style.padding = '15px';
menu.style.borderRadius = '5px';
Header.appendChild(menu);

const linkMasc = document.createElement('a');
linkMasc.href = 'masculino.html';
linkMasc.textContent = 'Elenco Masculino';
linkMasc.style.display = 'block';
menu.appendChild(linkMasc);

const linkFem = document.createElement('a');
linkFem.href = 'feminino.html';
linkFem.textContent = 'Elenco Feminino';
linkFem.style.display = 'block';
menu.appendChild(linkFem);

hamburgerButton.addEventListener('click', function() {
  menuVisible = !menuVisible;
  menu.style.display = menuVisible ? 'block' : 'none';
});


const OutraPagina = (evento) => {
  const imagem_clicada = evento.target;
  const descricao = imagem_clicada.getAttribute('data-descricao');
  const nome = imagem_clicada.getAttribute('data-nome');
  const dataNascimento = imagem_clicada.getAttribute('data-nascimento');
  const posicao = imagem_clicada.getAttribute('data-posicao');
  const caminho = imagem_clicada.getAttribute('src');
  const altura = imagem_clicada.getAttribute('data-altura');
  const nomeCompleto = imagem_clicada.getAttribute('data-nome_completo');
 

  localStorage.setItem('nome', nome);
  localStorage.setItem('posicao', posicao);
  localStorage.setItem('caminho', caminho);
  localStorage.setItem('descricao',descricao);
  localStorage.setItem('altura',altura);
  localStorage.setItem('Nome Completo',nomeCompleto);
  localStorage.setItem('Data de Nascimento',dataNascimento);

  window.location.href = "detalhes.html";
  }

const container = document.getElementById('container');
container.style.display = 'grid';
container.style.gridTemplateColumns = '1fr 1fr'; 
container.style.margin = 'auto auto';
container.style.marginTop = '200px';
container.style.maxWidth = '1200px';
container.style.gap = '10px';
container.style.position = 'relative';

function criarCard(imagem, nome_completo,descricao,nome, altura, posicao, nascimento, elenco,clica_imagem) {
    const div_card = document.createElement('div');
    div_card.style.position = 'relative';
    div_card.style.width = '230';
    div_card.style.height = '329';
    div_card.style.color = '#2e2d31'; 
    div_card.style.background = 'white';
    div_card.style.overflow = 'hidden'; 
    div_card.style.borderRadius = '20px';
    div_card.style.padding = '5px';
    div_card.style.marginBottom = '30px';
    div_card.className = 'div_card';
  
    const imagem_jogador = document.createElement('img');
    imagem_jogador.src = imagem;
    imagem_jogador.style.width = '230px';
    imagem_jogador.style.borderRadius = '20px';
    imagem_jogador.dataset.nome = nome;
    imagem_jogador.dataset.posicao = posicao;
    imagem_jogador.dataset.descricao = descricao;
    imagem_jogador.dataset.altura = altura;
    imagem_jogador.dataset.nome_completo = nome_completo;
    imagem_jogador.dataset.nascimento = nascimento;

    imagem_jogador.setAttribute("alt", "Imagens dos jogadores");
    imagem_jogador.addEventListener('click', clica_imagem);
    
    div_card.appendChild(imagem_jogador);
    const nome_completo_jogador = document.createElement('h5');
    nome_completo_jogador.innerHTML = nome_completo;
  
    const descricao_jogador = document.createElement('h5');

    descricao_jogador.innerHTML= descricao;

    const nome_jogador = document.createElement('h5');
    nome_jogador.innerHTML = nome;
    nome_jogador.style.color = 'black';
    nome_jogador.style.fontWeight = 'bold';
    nome_jogador.style.textAlign = 'center';
    nome_jogador.style.position = 'relative';

    const altura_jogador = document.createElement('span');
    altura_jogador.innerHTML = `Altura: ${altura}`;

    const posicao_jogador = document.createElement('span');
    posicao_jogador.innerHTML = `Posição: ${posicao}`;
    posicao_jogador.style.fontFamily = 'Inconsolata';

    const data_jogador = document.createElement('span');
    data_jogador.innerHTML = nascimento;

    const elenco_jogador = document.createElement('span');
    elenco_jogador.innerHTML = `Elenco: ${elenco}`;

    const cardSubtitle = document.createElement('div');
    cardSubtitle.style.display = 'flex';
    cardSubtitle.style.flexDirection = 'column';
    cardSubtitle.style.fontSize = '12px';
    cardSubtitle.style.marginBottom = '2px';
    cardSubtitle.appendChild(altura_jogador);
    cardSubtitle.appendChild(posicao_jogador);
    cardSubtitle.appendChild(elenco_jogador);
  
    const CardContent = document.createElement('div');
    CardContent.appendChild(nome_jogador);
    CardContent.appendChild(cardSubtitle);
    CardContent.style.position = 'absolute';
    CardContent.style.left = '0';
    CardContent.style.bottom = '0';
    CardContent.style.width = '100%';
    CardContent.style.padding = '5px';
    CardContent.style.background = '#f2f2f2';
    CardContent.style.borderTopLeftRadius = '20px';
    CardContent.style.transform = 'translateY(150px)';
    CardContent.style.transition = 'transform .25s';
  
    const cardContentBefore = document.createElement('div');
    cardContentBefore.style.content = '';
    cardContentBefore.style.position = 'absolute';
    cardContentBefore.style.top = '300px';
    cardContentBefore.style.right = '-80px';
    cardContentBefore.style.width = '100px';
    cardContentBefore.style.height = '120px';
    cardContentBefore.style.transform = 'rotate(-185deg)';
    cardContentBefore.style.borderRadius = '50%';
    cardContentBefore.style.boxShadow = 'inset 48px 48px #f2f2f2';
  
    div_card.appendChild(CardContent);
    div_card.appendChild(cardContentBefore);
  
    div_card.addEventListener('mouseenter', () => {
      CardContent.style.transform = 'translateY(0)';
      cardSubtitle.style.opacity = '1';
      cardSubtitle.style.transitionDelay = '.25s';
    });
  
    div_card.addEventListener('mouseleave', () => {
      CardContent.style.transform = 'translateY(150px)';
      cardSubtitle.style.opacity = '0';
    });
  
    return div_card;
  }
  
  for (let i = 0; i < jogadores.length; i++) {
    const jogador = jogadores[i];
    const card = criarCard(jogador.imagem, jogador.nome_completo, jogador.descricao, jogador.nome, jogador.altura, jogador.posicao, jogador.nascimento, jogador.elenco,OutraPagina);
    container.appendChild(card);
  }
  
  const busca_posicao = (e) => {
    const pre_string_busca = e.target.value;
    const string_busca = pre_string_busca.toLowerCase();
    
    if (string_busca.length >= 3 || string_busca.length === 0) {
      const novo_array = jogadores.filter((jogador) => {
        const nome = jogador.nome.toLowerCase();
        const posicao = jogador.posicao.toLowerCase();
        return posicao.includes(string_busca) || nome.includes(string_busca);
      });
  
      container.innerHTML = '';
  
      novo_array.forEach((jogador) => {
        const card = criarCard(jogador.imagem,jogador.nome_completo, jogador.descricao, jogador.nome, jogador.altura, jogador.posicao, jogador.nascimento, jogador.elenco, OutraPagina);
        container.appendChild(card)
      
      });
    } 
  };
  
  input.onkeyup = busca_posicao;
  

const footer = document.createElement('footer');
footer.setAttribute('id', 'footer');
footer.style.backgroundColor = '#f8f8f8';
footer.style.position = 'absolute';
footer.style.width = '100%';
footer.style.padding = '20px 0';

const botafogoLink = document.createElement('a');
botafogoLink.setAttribute('href', 'https://www.botafogo.com.br');
botafogoLink.setAttribute('target', '_blank');
botafogoLink.textContent = 'Visite o site oficial do Botafogo';
botafogoLink.style.color = '#333';
botafogoLink.style.fontWeight = 'bold';
botafogoLink.style.textDecoration = 'none';

const additionalInfo = document.createElement('p');
additionalInfo.textContent = 'Informações adicionais  podem ser encontradas no site oficial do clube.';
additionalInfo.style.color = '#666';
additionalInfo.style.fontStyle = 'italic';

footer.style.textAlign = 'center';
footer.style.fontFamily = 'Arial, sans-serif';

footer.appendChild(botafogoLink);
footer.appendChild(additionalInfo);
document.body.appendChild(footer);
