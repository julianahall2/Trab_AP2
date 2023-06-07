const card = document.getElementsByClassName('.card');
const div_lista_imagens = document.getElementById('#imagem_jogador');
const cardContent = document.getElementsByClassName('.card_content');
const cardTitle = document.getElementsByClassName('.card_title');
const cardSubtitle = document.getElementsByClassName('.card_subtitle');
const cardDescription = document.getElementsByClassName('.card_description');

jogadores.forEach((jogador) => {
    jogador.caminho = jogador.imagem;
  });
  

imagem_jogador.style.width = '300px';
imagem_jogador.style.height ='300px';
imagem_jogador.style.padding ='400px';



const criar_imagens = (entrada) => {
    card.innerHTML = '';
    entrada.forEach(
        ( jogador ) => {
            const imagem_numero = document.createElement('img');
            imagem_numero.src = jogador.caminho;
            imagem_numero.width = '300';
            
            

            card.appendChild(imagem_numero);


        }
    );
}

criar_imagens(jogadores);


card.style.position = 'relative';
card.style.width = '232px';
card.style.height = '332px';
card.style.color = '#2e2d31';
card.style.background = '#131313';
card.style.overflow = 'hidden';
card.style.borderRadius = '20px';
card.style.padding = '60px';


cardTitle.style.fontWeight = 'bold';

cardContent.style.position = 'absolute';
cardContent.style.left = '0';
cardContent.style.bottom = '0';
cardContent.style.width = '100%';
cardContent.style.padding = '20px';
cardContent.style.background = '#f2f2f2';
cardContent.style.borderTopLeftRadius = '20px';
cardContent.style.transform = 'translateY(150px)';
cardContent.style.transition = 'transform .25s';

const cardContentBefore = document.createElement('div');
cardContentBefore.style.content = '';
cardContentBefore.style.position = 'absolute';
cardContentBefore.style.top = '-47px';
cardContentBefore.style.right = '-45px';
cardContentBefore.style.width = '100px';
cardContentBefore.style.height = '100px';
cardContentBefore.style.transform = 'rotate(-175deg)';
cardContentBefore.style.borderRadius = '50%';
cardContentBefore.style.boxShadow = 'inset 48px 48px #f2f2f2';




cardTitle.style.color = '#131313';
cardTitle.style.lineHeight = '15px';

cardSubtitle.style.display = 'block';
cardSubtitle.style.fontSize = '12px';
cardSubtitle.style.marginBottom = '10px';

cardDescription.style.fontSize = '14px';
cardDescription.style.opacity = '0';
cardDescription.style.transition = 'opacity .5s';

card.addEventListener('mouseenter', () => {
  cardContent.style.transform = 'translateY(0)';
  cardDescription.style.opacity = '1';
  cardDescription.style.transitionDelay = '.25s';
});

card.addEventListener('mouseleave', () => {
  cardContent.style.transform = 'translateY(150px)';
  cardDescription.style.opacity = '0';
});
