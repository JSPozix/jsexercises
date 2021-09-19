let baseInput = document.createElement('input');
let showParagraph = document.createElement('p');
let baseDiv = document.querySelectorAll('#app');
baseInput.setAttribute('type', 'text');
baseInput.placeholder = 'Type your name ';

let changePlaceholder = () => {
  baseInput.placeholder = 'edit...';
};

let enterFunction = (event) => {
  if (event.keyCode === 13) {
    let inputValue = baseInput.value;

    showParagraph.innerHTML = inputValue;
    document.querySelector('div').appendChild(showParagraph);
    baseInput.placeholder = 'Type your name ';
    baseInput.value = '';
  }
};
let focusFunction = () => {
  let inputValue = baseInput.value;

  showParagraph.innerHTML = inputValue;
  document.querySelector('div').appendChild(showParagraph);
  baseInput.placeholder = 'Type your name ';
  baseInput.value = '';
};
baseInput.addEventListener('click', changePlaceholder);
baseInput.addEventListener('keyup', enterFunction);
baseInput.addEventListener('focusout', focusFunction);
document.querySelector('div').appendChild(baseInput);
