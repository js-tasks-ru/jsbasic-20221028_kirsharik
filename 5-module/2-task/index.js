function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  function hideText() {
    if (text.hidden == false) {
     text.hidden = true
     } else {
      text.hidden = false
    };
  }
  button.addEventListener('click', hideText);
}
