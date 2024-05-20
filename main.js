// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the elements by their IDs
  const math = document.getElementById('maths');
  const science = document.getElementById('science');
  const sst = document.getElementById('sst');
  const english = document.getElementById('english');
  const hindi = document.getElementById('hindi');
  const computer = document.getElementById('computer');
  const output = document.getElementById('output');
  const form = document.getElementById('form');
  const maxMark = 600;

  // Add an event listener to the form to handle the submit event
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Convert the values to numbers and sum them
    const result = Number(math.value) + Number(science.value) + Number(sst.value) + Number(english.value) + Number(hindi.value) + Number(computer.value);

    // Calculate the percentage
    let percentage = (result / maxMark) * 100;

    // Format the percentage to two decimal places
    let modifiedPercentage = percentage.toFixed(2);

    // Display the result
    output.innerText = `You have scored ${result} out of ${maxMark} and your percentage is ${modifiedPercentage}`;
    
    math.value = '';
    science.value = '';
    english.value ='';
    computer.value ='';
    sst.value ='';
    hindi.value='';
    
  });
});
