// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const ref = {
  input: document.querySelector('#name-input'),
  labelTextEl: document.querySelector('#name-output'),
};
ref.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === '') {
    ref.labelTextEl.textContent = 'незнакомец';
  } else {
    ref.labelTextEl.textContent = event.currentTarget.value;
  }
}
