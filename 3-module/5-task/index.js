function getMinMax(str) {
  
  let compareNumeric = function(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  };
  
  let inputData = str;
  
  let arrStr = inputData.split(' ');
  
  let arrNumbersNan = arrStr.map(item => +item);
  
  let arrNumbers = arrNumbersNan.filter(item => isFinite(item));
  
  arrNumbers.sort(compareNumeric);
  
  let result = {min: arrNumbers[0], max: arrNumbers[arrNumbers.length - 1]};

  return result
  
}
