import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button')
const picker = document.querySelector('#datetime-picker')

const days = document.querySelector('[data-days]')
const hours = document.querySelector('[data-hours]')
const minutes = document.querySelector('[data-minutes]')
const seconds = document.querySelector('[data-seconds]')

let selectedDate;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      selectedDate = selectedDates[0]
        if (selectedDate <= new Date()) {
          Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            Notiflix.Notify.success('Press START');
          startBtn.disabled = false
          startBtn.addEventListener('click', startTimer)
      }
  },
};

flatpickr(picker, options);

function startTimer() {
    const timer = setInterval(() => {
        picker.disabled = true;
      startBtn.disabled = true;
        const countdown = selectedDate - new Date();
        const convertation = convertMs(countdown);
        
        if (countdown >= 0) {
            days.textContent = convertation.days;
            hours.textContent = convertation.hours;
            minutes.textContent = convertation.minutes;
            seconds.textContent = convertation.seconds;
        } else {
            clearInterval(timer);
        }
    }, 1000)
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
