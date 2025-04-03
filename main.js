const hexFarm = () => {
  const hexes = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexes[Math.floor(Math.random() * 16)];
  }
  return color;
};

let rgb1, rgb2;
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const para = document.querySelector('.para');
const copy = document.getElementById('copy');

btn1.addEventListener('click', () => {
  rgb1 = hexFarm();
  btn1.innerText = rgb1;
  updateGradientText();
});

btn2.addEventListener('click', () => {
  rgb2 = hexFarm();
  btn2.innerText = rgb2;
  updateGradientText();
});

function updateGradientText() {
  if (rgb1 && rgb2) {
    const gradientCode = `background: linear-gradient(to right, ${rgb1}, ${rgb2});`;
    para.innerText = gradientCode;
    document.body.style.background = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  }
}

function copyToClipboard() {
  navigator.clipboard.writeText(para.innerText).then(() => {
    alert('Copied to clipboard');
  }).catch(err => console.error('Copy failed', err));
}

copy.addEventListener('click', copyToClipboard);
para.addEventListener('click', copyToClipboard);
