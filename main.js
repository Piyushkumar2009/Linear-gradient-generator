const hexFarm = () => {
  let hexes = '0123456789ABCDEF';
  let colors = '#';
  for (let i = 0; i < 6; i++) {
    colors += hexes[Math.floor(Math.random() * 16)];
  }
  return colors;
}
let copy = document.getElementById('copy');
let rgb1;
let rgb2;
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let para = document.querySelector('.para');

btn1.addEventListener('click', () => {
  rgb1 = hexFarm();
  console.log(rgb1);
  btn1.innerText = rgb1;
  updateGradientText();
});

btn2.addEventListener('click', () => {
  rgb2 = hexFarm();
  console.log(rgb2);
  btn2.innerText = rgb2;
  updateGradientText();
});

function updateGradientText() {
  if (rgb1 && rgb2) {
    para.innerText = `background: linear-gradient(to right, ${rgb1}, ${rgb2});`;
    document.body.style.background = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    }
}

copy.addEventListener('click',()=>{
  navigator.clipboard.writeText(para.innerText);
  alert('copied to clipboard');
})

para.addEventListener('click', () => {
  navigator.clipboard.writeText(para.innerText);
  alert('copied to clipboard');
})