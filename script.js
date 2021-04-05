var countdown = 10;

setInterval(function() {
  countdown = --countdown <= 0 ? 0 : countdown;
  document.getElementById('countdown-number').textContent = countdown;
  document.getElementById('redirection-message-timer').textContent = countdown;
}, 1000);