import Notiflix from 'notiflix';

const formEl = document.querySelector('form')

formEl.addEventListener('submit', onSubmit)

function onSubmit(e) {
  e.preventDefault();

  let delay = +formEl.delay.value

  for (let i = 0; i < formEl.amount.value; i++) {
    createPromise(i, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`);
  });
    delay += +formEl.step.value;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
      resolve({position, delay})
    } else {
      reject({position, delay})
      }
    }, delay)
  })
}