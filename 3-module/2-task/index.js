function filterRange(arr, a, b) {
  let results = arr.filter(item =>
    (a <= item && item <= b) || (b <= item && item <= a)
    );
  return (results);
}
