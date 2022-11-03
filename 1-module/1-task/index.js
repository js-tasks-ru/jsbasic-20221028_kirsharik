function factorial(n) {
  return (fact(n + 1) / (n + 1));
}

function fact(l) {
  let m = l;
  while (l > 1) {
    m = (m * (l - 1));
    l -= 1;
  }
  return (m);
}
