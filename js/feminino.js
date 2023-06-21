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
Voltar.textContent = 'Voltar';
Voltar.style.right = '80px';
Voltar.style.position = 'absolute';
Voltar.addEventListener('click', function() {
  window.history.back();
});

Header.appendChild(NavBar);
NavBar.appendChild(Voltar);
document.body.appendChild(Header);

const jogadoresFemininos = jogadores.filter(jogador => jogador.elenco === 'feminino');

const feminino = document.createElement('section');
feminino.style.display = 'grid';
feminino.style.gridTemplateColumns = '1fr 1fr';
feminino.style.width = '100%';
feminino.style.height = '100%';
feminino.style.margin = '200px auto 0';
feminino.className = 'feminino';

const ElencoFeminino = document.createElement('h2')
ElencoFeminino.innerHTML = 'Elenco Feminino';
ElencoFeminino.style.color = 'black';
ElencoFeminino.style.textAlign = 'center';

Header.appendChild(ElencoFeminino);

jogadoresFemininos.forEach(jogador => {
  const cardFeminino = document.createElement('div');
  cardFeminino.style.position = 'relative';
  cardFeminino.style.width = '230px';
  cardFeminino.style.height = '329px';
  cardFeminino.style.color = '#2e2d31'; 
  cardFeminino.style.background = 'white';
  cardFeminino.style.overflow = 'hidden';
  cardFeminino.style.borderRadius = '20px';
  cardFeminino.style.padding = '5px';
  cardFeminino.style.marginBottom = '30px';

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
  cardFeminino.appendChild(CardContent);

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
  cardFeminino.appendChild(CardContentBefore);

  cardFeminino.addEventListener('mouseenter', () => {
    CardContent.style.transform = 'translateY(0)';
    CardSubtitle.style.opacity = '1';
    CardSubtitle.style.transitionDelay = '.25s';
  });

  cardFeminino.addEventListener('mouseleave', () => {
    CardContent.style.transform = 'translateY(150px)';
    CardSubtitle.style.opacity = '0';
  });

  const nome = document.createElement('h3');
  nome.style.position = 'relative';
  nome.style.color = 'black';
  nome.style.fontWeight = 'bold';
  nome.style.textAlign = 'center';
  nome.innerHTML = jogador.nome;
  nome.style.fontFamily = 'Inconsolata';

  const posicao = document.createElement('p');
  posicao.innerHTML = `Posição: ${jogador.posicao}`;
  posicao.style.fontFamily = 'Inconsolata';

  const img= document.createElement('img');
  img.src = jogador.imagem;
  img.style.borderRadius = '20px';
  img.setAttribute("alt", "Imagens dos jogadores");
   
  CardSubtitle.appendChild(nome);
  CardSubtitle.appendChild(posicao);
  cardFeminino.appendChild(img);
  
  feminino.appendChild(cardFeminino);
});
document.body.appendChild(feminino);

const footer = document.createElement('footer');
footer.setAttribute('id', 'botafogo-footer');
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