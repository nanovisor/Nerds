var inputs = document.querySelectorAll('.slider input');

var inputNumber = 0;

setInterval(function() {
  if (inputNumber > inputs.length - 1) inputNumber = 0; // repeat

  inputs[inputNumber].checked = true;

  inputNumber++;
}, 3000);
