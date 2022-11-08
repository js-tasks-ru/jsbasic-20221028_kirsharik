function highlight(table) {
  tbody = table.tBodies[0];
  // tbody.style.backgroundColor = 'red'
  for (let i = 0; i < tbody.rows.length; i++) {

    if (tbody.rows[i].cells[1].innerHTML < 18) {
      tbody.rows[i].style = "text-decoration: line-through";
    };

    if (tbody.rows[i].cells[2].innerHTML == 'm') {
      tbody.rows[i].classList.add('male');}
    else {tbody.rows[i].classList.add('female')
    };

    if (tbody.rows[i].cells[3].dataset.available == 'true') {
      tbody.rows[i].classList.add('available');}
    else if (tbody.rows[i].cells[3].dataset.available == 'false') {
      tbody.rows[i].classList.add('unavailable');}
    else {tbody.rows[i].setAttribute('hidden', 'hidden')};
    
  }
}
