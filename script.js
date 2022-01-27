const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');

const NY = '25 dec 2022';

function CD() {
    const NYD = new Date(NY);
    const CD = new Date();

    const totalsec = (NYD-CD) / 1000;
    const sec = Math.floor(totalsec) % 60;
    const min = Math.floor(totalsec / 60) % 60;
    const hours = Math.floor(totalsec / 60 / 60) % 24;
    const days = Math.floor(totalsec / 60 / 60 / 24);
    
    //console.log(NYD-CD);
    //console.log(days, hours, min, sec);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(min);
    secEl.innerHTML = formatTime(sec);
}

function formatTime(time) {
   return time < 10 ? ('0' + time): time;
}
// initial call
CD();

setInterval(CD, 1000);


