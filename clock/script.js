function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.querySelector('.hour').textContent = hours;
    document.querySelector('.minute').textContent = minutes;
    document.querySelector('.second').textContent = seconds;
  
//   if(hours > 12) {
//   hours = hours - 12
// }
  
// if(thisSecond < 10) {
//   thisSecond = "0" + thisSecond;
// }
}

updateClock();
setInterval(updateClock, 1000);
