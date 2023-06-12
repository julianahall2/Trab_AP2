const container = document.getElementById('container');
container.style.display = 'grid';
container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';

const group = document.createElement('div');
group.style.display = 'flex';
group.style.lineHeight ='28px';
group.style.marginBottom = '10px';
group.style.position ='relative';
group.style.maxWidth = '190px';
group.classList.add('group');
group.style.flexDirection = 'flex-start'

const svg = document.createElement('svg');
svg.classList.add('icon');
svg.setAttribute('aria-hidden', 'true');
svg.setAttribute('viewBox', '0 0 24 24');

const g = document.createElement('g');

const path = document.createElement('path');
path.setAttribute('d', 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z');

g.appendChild(path);
svg.appendChild(g);
group.appendChild(svg);

const input = document.createElement('input');
input.style.width= '100%';
input.style.height= '40px';
input.style.lineHeight ='28px';
input.style.padding ='0 1rem';
input.style.paddingLeft ='2.5rem';
input.style.border='2px solid transparent' ;
input.style.borderRadius='8px';
input.style.outline = 'none';
input.style.backgroundColor ='#f3f3f4';
input.style.color ='#0d0c22' ;
input.style.transition =' .3s ease';
input.setAttribute('placeholder', 'Search');
input.setAttribute('type', 'search');
input.classList.add('input');

group.appendChild(input);

const parentElement = document.getElementById('header');
parentElement.appendChild(group);

const jogadoresMasculinos = jogadores.filter(jogador => jogador.elenco === 'masculino');
const jogadoresFemininos = jogadores.filter(jogador => jogador.elenco === 'feminino');

const masculino = document.createElement('section');

const div_masculino = document.createElement('div');
div_masculino.style.display = 'grid';
div_masculino.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';


masculino.appendChild(div_masculino);

const ElencoMasculino = document.createElement('h2')
ElencoMasculino.innerHTML = 'Elenco Masculino'
ElencoMasculino.style.color = 'white'
ElencoMasculino.style.textAlign = 'center'
document.body.appendChild(ElencoMasculino);

jogadoresMasculinos.forEach(jogador => {
  const cardMasculino = document.createElement('div');
  cardMasculino.style.position = 'relative';
  cardMasculino.style.width = '230px';
  cardMasculino.style.height = '350px';
  cardMasculino.style.color = '#2e2d31'; 
  cardMasculino.style.background = 'black';
  cardMasculino.style.overflow = 'hidden';
  cardMasculino.style.borderRadius = '20px';
  cardMasculino.style.padding = '5px';
  cardMasculino.style.marginBottom = '30px';

  const CardContent = document.createElement('div');
  CardContent.style.position = 'absolute';
  CardContent.style.left = '0';
  CardContent.style.bottom = '0';
  CardContent.style.width = '100%';
  CardContent.style.padding = '5px';
  CardContent.style.background = '#f2f2f2';
  CardContent.style.borderTopLeftRadius = '20px';
  CardContent.style.transform = 'translateY(150px)';
  CardContent.style.transition = 'transform .25s';
  cardMasculino.appendChild(CardContent);

  const CardSubtitle = document.createElement('div');
  CardSubtitle.style.display = 'flex';
  CardSubtitle.style.flexDirection = 'column';
  CardSubtitle.style.fontSize = '12px';
  CardSubtitle.style.marginBottom = '2px';
  CardContent.appendChild(CardSubtitle);
  
  const CardContentBefore = document.createElement('div');
  CardContentBefore.style.content = '';
  CardContentBefore.style.position = 'absolute';
  CardContentBefore.style.top = '300px';
  CardContentBefore.style.right = '-100px';
  CardContentBefore.style.width = '100px';
  CardContentBefore.style.height = '100px';
  CardContentBefore.style.transform = 'rotate(-185deg)';
  CardContentBefore.style.borderRadius = '50%';
  CardContentBefore.style.boxShadow = 'inset 48px 48px #f2f2f2';
  cardMasculino.appendChild(CardContentBefore);

  cardMasculino.addEventListener('mouseenter', () => {
    CardContent.style.transform = 'translateY(0)';
    CardSubtitle.style.opacity = '1';
    CardSubtitle.style.transitionDelay = '.25s';
  });

  cardMasculino.addEventListener('mouseleave', () => {
    CardContent.style.transform = 'translateY(150px)';
    CardSubtitle.style.opacity = '0';
  });

  const img= document.createElement('img');
  img.src = jogador.imagem;

  const nome = document.createElement('h3');
  nome.style.position = 'relative';
  nome.style.color = 'black';
  nome.style.fontWeight = 'bold';
  nome.style.textAlign = 'center';
  nome.innerHTML = jogador.nome;

  const posicao = document.createElement('p');
  posicao.innerHTML = `Posição: ${jogador.posicao}`;

  CardContent.appendChild(nome);
  CardSubtitle.appendChild(posicao);
  cardMasculino.appendChild(img);
  

  div_masculino.appendChild(cardMasculino);
});
document.body.appendChild(masculino);

const feminino = document.createElement('section');

const div_feminino = document.createElement('div');
div_feminino.style.display = 'grid';
div_feminino.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';
feminino.appendChild(div_feminino);

const ElencoFeminino = document.createElement('h2')
ElencoFeminino.innerHTML = 'Elenco Feminino';
ElencoFeminino.style.color = 'white';
ElencoFeminino.style.textAlign = 'center';

document.body.appendChild(ElencoFeminino);
jogadoresFemininos.forEach(jogador => {
  const img= document.createElement('img');
  img.src = jogador.imagem;
  
  div_feminino.appendChild(img);
});
document.body.appendChild(feminino);


function criarCard(imagem, nome, altura, posicao, nascimento, elenco) {
    const div_card = document.createElement('div');
    div_card.style.position = 'relative';
    div_card.style.width = '230px';
    div_card.style.height = '350px';
    div_card.style.color = '#2e2d31'; 
    div_card.style.background = 'black  ';
    div_card.style.overflow = 'hidden';
    div_card.style.borderRadius = '20px';
    div_card.style.padding = '5px';
    div_card.style.marginBottom = '30px';
  
    const imagem_jogador = document.createElement('img');
    imagem_jogador.src = imagem;
    imagem_jogador.style.width = '230px';
    imagem_jogador.style.borderRadius = '20px';
    div_card.appendChild(imagem_jogador);
  
    const nome_jogador = document.createElement('h5');
    nome_jogador.innerHTML = nome;
    nome_jogador.style.marginLeft = '65px';
    nome_jogador.style.color = 'black';
    nome_jogador.style.fontWeight = 'bold';
    
    const altura_jogador = document.createElement('span');
    altura_jogador.innerHTML = `Altura: ${altura}`;
  
    const posicao_jogador = document.createElement('span');
    posicao_jogador.innerHTML = `Posição: ${posicao}`;
  
    const data_jogador = document.createElement('span');
    data_jogador.innerHTML = `Data de nascimento: ${nascimento}`;
  
    const elenco_jogador = document.createElement('span');
    elenco_jogador.innerHTML = `Elenco: ${elenco}`;
  
    const cardSubtitle = document.createElement('div');
    cardSubtitle.style.display = 'flex';
    cardSubtitle.style.flexDirection = 'column';
    cardSubtitle.style.fontSize = '12px';
    cardSubtitle.style.marginBottom = '2px';
    cardSubtitle.appendChild(altura_jogador);
    cardSubtitle.appendChild(posicao_jogador);
    cardSubtitle.appendChild(data_jogador); 
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
    const card = criarCard(jogador.imagem, jogador.nome, jogador.altura, jogador.posicao, jogador.nascimento, jogador.elenco);
    container.appendChild(card);
  }
  
  const busca_elenco = (e) => {
    const pre_string_busca = e.target.value;
    const string_busca = pre_string_busca.toLowerCase();
    
    if (string_busca.length >= 3 || string_busca.length === 0) {
      const novo_array = jogadores.filter((jogador) => {
        const elenco = jogador.elenco.toLowerCase();
        return elenco.includes(string_busca);
      });
  
      container.innerHTML = '';
  
      novo_array.forEach((jogador) => {
        const card = criarCard(jogador.imagem, jogador.nome, jogador.altura, jogador.posicao, jogador.nascimento, jogador.elenco);
        container.appendChild(card);
      });
    }
  };
  
  input.onkeyup = busca_elenco;
  