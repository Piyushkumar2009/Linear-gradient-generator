document.addEventListener('DOMContentLoaded', () => {
  const kiloMeter = document.getElementById('kilometer');
  const price = document.getElementById('price');
  const form = document.getElementById('form');
  const output = document.getElementById('output');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = Number(kiloMeter.value) * Number(price.value);
    
    output.innerText = `The price of ${kiloMeter.value} kilometer is ₹${result}`;
    
    kiloMeter.value = '';
    price.value = '';
  });
});
