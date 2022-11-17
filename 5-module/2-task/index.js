function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  function hideText() {
    if (text.hidden == false) {
     text.setAttribute('hidden', true)
     } else {
      text.removeAttribute('hidden')
    };
  }
  button.addEventListener('click', hideText);
}
