const Header = document.createElement('header');
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

const Voltar = document.createElement('button');
Voltar.style.color = 'black';
Voltar.style.borderRadius = '5px';
Voltar.style.width = '60px';
Voltar.style.height = '20px';
Voltar.style.marginLeft = '50px';
Voltar.textContent = 'Voltar';
Voltar.style.right = '30px';  
Voltar.style.position = 'fixed';
Voltar.addEventListener('click', function() {
  window.history.back();
});


Header.appendChild(NavBar);
NavBar.appendChild(Voltar);
document.body.appendChild(Header);


const jogadoresMasculinos = jogadores.filter(jogador => jogador.elenco === 'masculino');

const masculino = document.createElement('section');
masculino.style.marginTop = '200px';

const div_masculino = document.createElement('div');
div_masculino.className = 'div_masculino';
div_masculino.style.display = 'grid';
div_masculino.style.gridTemplateColumns = '1fr 1fr ';
div_masculino.style.maxWidth = '1200px';
div_masculino.style.margin = 'auto';
div_masculino.style.marginLeft = '20px';
div_masculino.style.gap = '5px';

masculino.appendChild(div_masculino);

const ElencoMasculino = document.createElement('h2');
ElencoMasculino.innerHTML = 'Elenco Masculino';
ElencoMasculino.style.color = 'black';
ElencoMasculino.style.textAlign = 'center';
Header.appendChild(ElencoMasculino)

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
  img.setAttribute("alt", "Imagens dos jogadores");

  const nome = document.createElement('h3');
  nome.style.position = 'relative';
  nome.style.color = 'black';
  nome.style.fontWeight = 'bold';
  nome.style.textAlign = 'center';
  nome.innerHTML = jogador.nome;

  const posicao = document.createElement('p');
  posicao.innerHTML = `Posição: ${jogador.posicao}`;

  CardSubtitle.appendChild(nome);
  CardSubtitle.appendChild(posicao);
  cardMasculino.appendChild(img);  

  div_masculino.appendChild(cardMasculino);
});
document.body.appendChild(masculino);
