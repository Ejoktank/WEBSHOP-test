window.addEventListener('DOMContentLoaded', () => {
  let buttons = document.getElementsByClassName('watch-more');
  for (let btn of buttons) {
    btn.addEventListener('focus', () => {
      beforeFocusCall(btn);
    });
    btn.addEventListener('focusout', () => {
      beforeFocusOut(btn);
    });
  };

  let cards = document.getElementsByClassName('card');
  for (let card of cards) {
    card.addEventListener('mouseenter', () => {
      let btn = card.querySelector('.watch-more'); 
      beforeFocusCall(btn);
    });
    card.addEventListener('mouseleave', () => {
      let btn = card.querySelector('.watch-more');
      beforeFocusOut(btn);
    });
  };
});

function beforeFocusCall(btn) {
  btn.textContent = '';
  btn.classList.add('watch-more-white');
  if (btn.classList.contains('purple')) {
    document.querySelector('.card-fruits').style.setProperty('--display', 'block');
  };
  if (btn.classList.contains('red')) {
    document.querySelector('.card-berries').style.setProperty('--display', 'block');
  };
  if (btn.classList.contains('green')) {
    document.querySelector('.card-juice').style.setProperty('--display', 'block');
  };
  if (btn.classList.contains('orange')) {
    document.querySelector('.card-vegs').style.setProperty('--display', 'block');
  };
};

function beforeFocusOut(btn) {
  btn.textContent = 'Смотреть';
  btn.classList.remove('watch-more-white');
  if (btn.classList.contains('purple')) {
    document.querySelector('.card-fruits').style.setProperty('--display', 'none');
  };
  if (btn.classList.contains('red')) {
    document.querySelector('.card-berries').style.setProperty('--display', 'none');
  };
  if (btn.classList.contains('green')) {
    document.querySelector('.card-juice').style.setProperty('--display', 'none');
  };
  if (btn.classList.contains('orange')) {
    document.querySelector('.card-vegs').style.setProperty('--display', 'none');
  };
};