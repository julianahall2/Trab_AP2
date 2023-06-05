const card = document.querySelector('.card');
const temporaryText = document.querySelector('.temporary_text');
const cardContent = document.querySelector('.card_content');
const cardTitle = document.querySelector('.card_title');
const cardSubtitle = document.querySelector('.card_subtitle');
const cardDescription = document.querySelector('.card_description');

card.style.position = 'relative';
card.style.width = '250px';
card.style.height = '250px';
card.style.color = '#2e2d31';
card.style.background = '#131313';
card.style.overflow = 'hidden';
card.style.borderRadius = '20px';

temporaryText.style.fontWeight = 'bold';
temporaryText.style.fontSize = '24px';
temporaryText.style.padding = '6px 12px';
temporaryText.style.color = '#f8f8f8';

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
