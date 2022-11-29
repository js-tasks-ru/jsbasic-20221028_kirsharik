/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.table = this.render();
  }

  render() {
    let table = document.createElement('table');

    let thead = document.createElement('thead');
    thead.innerHTML = (`
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>`);
    table.appendChild(thead);

    let tbody = document.createElement('tbody');
    

    for (let i = 0; i < this.rows.length; i++) {
      let tr = document.createElement('tr');

      for (let key in this.rows[i]) {
        let td = document.createElement('td');
        td.innerHTML = this.rows[i][key];
        tr.appendChild(td);
      }

      let tdBtn = document.createElement('td');
      tdBtn.innerHTML = '<button>X</button>';
      tr.appendChild(tdBtn);

      tbody.appendChild(tr);
    }

    table.appendChild(tbody);

    table.addEventListener('click', this.onClick);

    return table;

  }

  onClick(ev) {
    let xBtn = ev.target.closest('button');
    if (!xBtn) return;
    ev.target.closest('tr').remove();
  }


  get elem() {
    return this.table;
  }

}
