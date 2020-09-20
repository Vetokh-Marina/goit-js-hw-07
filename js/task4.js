// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};
const btnDecrement = document.querySelector('[data-action="decrement"]');
console.log(btnDecrement);
const btnIncrement = document.querySelector('[data-action="increment"]');
console.log(btnIncrement);
const valueEl = document.querySelector('#value');
console.log(valueEl);

btnDecrement.addEventListener('click', () => {
  console.log('кликнули на decrement');
  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.counterValue;
});

btnIncrement.addEventListener('click', () => {
  console.log('кликнули на decrement');
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.counterValue;
});
