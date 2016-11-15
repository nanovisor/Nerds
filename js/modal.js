;(function() {

  var modal = document.querySelector('.modal-content'),
      form = modal.querySelector('.write-us-form'),
      textarea = form.elements.text,
      submitBtn = form.querySelector('input[type=submit]'),
      openForm = document.querySelector('#open-form'),
      closeForm = document.querySelector('#close-form'),
      overlay = document.querySelector('.overlay');


  // click Write Us btn
  openForm.onclick = function(event) {
    event.preventDefault();
    overlay.classList.add('overlay--show');
    modal.classList.toggle('modal-content--show');
    submitBtn.setAttribute('disabled', true);
    submitBtn.value = 'Напишите сообщение';
  };

  // click close btn
  closeForm.onclick = function(event) {
    event.preventDefault();
    closeModalAndOverlay();
  };

  // click on overlay
  overlay.onclick = function() {
    closeModalAndOverlay();
  };

  // push ESC btn
  document.body.onkeydown = function(e) {
    if (e.keyCode === 27) {
      closeModalAndOverlay();
    }
  };

  // textarea
  textarea.oninput = function(e) {
    var string = e.target.value.replace(/\s/g, ''); // remove whitespaces
    if (string.length <= 10) {
      submitBtn.setAttribute('disabled', true);
      submitBtn.value = 'Напишите сообщение';
    } else {
      submitBtn.removeAttribute('disabled');
      submitBtn.value = 'Отправить';
    }
  };

  function closeModalAndOverlay() {
    overlay.classList.remove('overlay--show');
    modal.classList.remove('modal-content--show');
  }

})();
