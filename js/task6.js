// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const input = document.querySelector('#validation-input');
const inputLengthOf = input.dataset.length;

input.addEventListener('input', onInputValidNumber);

function onInputValidNumber(event) {
  if (event.currentTarget.value.length > inputLengthOf) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else if (event.currentTarget.value.length < inputLengthOf) {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
  console.log(event.currentTarget.value.length);
  console.log(inputLengthOf);
}
