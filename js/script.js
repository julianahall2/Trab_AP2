const container = document.getElementById('container');
container.style.display = 'grid';
container.style.gridTemplateColumns = '1fr 1fr';
container.style.maxWidth = '1200px';
container.style.gap = '5px';
container.style.marginTop = '200px';
container.style.alignItems = 'center';

const group = document.createElement('div');
group.style.display = 'flex';
group.style.lineHeight = '28px';
group.style.position = 'relative';
group.style.maxWidth = '190px';
group.style.marginRight = '300px';
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
input.setAttribute('placeholder', 'Buscar');
input.setAttribute('type', 'search');
input.classList.add('input');

group.appendChild(input);

const Header = document.getElementById('header');
Header.style.backgroundColor = 'white';
Header.style.padding = '20px';
Header.style.display = 'grid';
Header.style.gridTemplateColumns = '1fr auto 1fr';
Header.style.alignItems = 'center';
Header.style.position = 'fixed';
Header.style.top = '0';
Header.style.left = '0';
Header.style.width = '100%';
Header.style.zIndex = '1';

const NavBar = document.createElement('nav');
NavBar.style.display = 'flex';
NavBar.style.justifyContent = 'flex-end';
NavBar.classList.add('nav-items');

const paginaElencoMasc = document.createElement('div');
paginaElencoMasc.id = 'paginaElencoMasc';
paginaElencoMasc.style.marginLeft = '40px';
paginaElencoMasc.style.padding = '20px';
paginaElencoMasc.style.border = '2px solid trasparent';
paginaElencoMasc.style.borderRadius = '8px';
paginaElencoMasc.style.outline = 'none';
paginaElencoMasc.style.backgroundColor = '#f3f3f4';
paginaElencoMasc.style.color = '#0d0c22';
paginaElencoMasc.style.transition = '.3s ease';

const LinkMasc = document.createElement('a');
LinkMasc.href = 'masculino.html';
LinkMasc.id = 'a';
LinkMasc.textContent = 'Elenco Masculino';

paginaElencoMasc.appendChild(LinkMasc);

const paginaElencoFem = document.createElement('div');
paginaElencoFem.id = 'paginaElencoFem';
paginaElencoFem.style.marginLeft = '5px';
paginaElencoFem.style.padding = '20px';
paginaElencoFem.style.border = '2px solid transparent';
paginaElencoFem.style.borderRadius = '8px';
paginaElencoFem.style.outline = 'none';
paginaElencoFem.style.backgroundColor = '#f3f3f4';
paginaElencoFem.style.color = '#0d0c22';
paginaElencoFem.style.transition = '.3s ease';

const LinkFem = document.createElement('a');
LinkFem.href = 'feminino.html';
LinkFem.id = 'a';
LinkFem.textContent = 'Elenco Feminino';

LinkMasc.style.margin = '0 10px';
LinkFem.style.margin = '0 10px';
LinkMasc.style.textDecoration = 'none';
LinkFem.style.textDecoration = 'none';
LinkMasc.style.color = '#333';
LinkFem.style.color = '#333';

const menuBtn = document.createElement('button');
menuBtn.innerHTML = '&#9776;';
menuBtn.style.fontSize = '24px';
menuBtn.style.display = 'block';
menuBtn.style.border = 'none';
menuBtn.style.background = 'transparent';
menuBtn.style.cursor = 'pointer';
menuBtn.style.marginRight = '10px';
menuBtn.classList.add('menu-btn');
Header.appendChild(menuBtn);


menuBtn.addEventListener('click', () => {
  NavBar.classList.toggle('show');
});



input.style.marginRight = '10px';

paginaElencoFem.appendChild(LinkFem);

NavBar.appendChild(paginaElencoMasc);
NavBar.appendChild(paginaElencoFem);

Header.appendChild(group);
Header.appendChild(NavBar);



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
  
function criarCard(imagem, nome_completo,descricao,nome, altura, posicao, nascimento, elenco,clica_imagem) {
    const div_card = document.createElement('div');
    div_card.style.position = 'relative';
    div_card.style.width = '230px';
    div_card.style.height = '350px';
    div_card.style.color = '#2e2d31'; 
    div_card.style.background = 'white';
    div_card.style.overflow = 'hidden';
    div_card.style.borderRadius = '20px';
    div_card.style.padding = '5px';
    div_card.style.marginBottom = '30px';
  
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
    nome_jogador.style.marginLeft = '65px';
    nome_jogador.style.color = 'black';
    nome_jogador.style.fontWeight = 'bold';

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
        const posicao = jogador.posicao.toLowerCase();
        return posicao.includes(string_busca);
      });
  
      container.innerHTML = '';
  
      novo_array.forEach((jogador) => {
        const card = criarCard(jogador.imagem,jogador.nome_completo, jogador.descricao, jogador.nome, jogador.altura, jogador.posicao, jogador.nascimento, jogador.elenco, OutraPagina);
        container.appendChild(card)
      
      });
    } 
  };
  
  input.onkeyup = busca_posicao;
  


