function camelize(str) {
  let arrUppercase = [];
  let arrLowercase = str.split('-');
  arrLowercase.forEach((item, index) => {
    if (index ==0) {
      arrUppercase.push(item);
    } 
    else {
      item = item[0].toUpperCase() + item.slice(1);
      arrUppercase.push(item);
      }
  })

  strCamel = arrUppercase.join('');

  return strCamel;
}
