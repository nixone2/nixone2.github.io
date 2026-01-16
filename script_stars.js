// Pure JS to generate random box-shadows for parallax stars
function randomStars(n, size) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let x = Math.floor(Math.random() * 2000);
    let y = Math.floor(Math.random() * 2000);
    arr.push(`${x}px ${y}px #FFF`);
  }
  return arr.join(', ');
}

window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('stars').style.boxShadow = randomStars(700, 1);
  document.getElementById('stars2').style.boxShadow = randomStars(200, 2);
  document.getElementById('stars3').style.boxShadow = randomStars(100, 3);
});