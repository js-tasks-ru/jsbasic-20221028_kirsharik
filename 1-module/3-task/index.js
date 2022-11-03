function ucFirst(str) {
  if (
    typeof str == 'string' &&
    str.length > 0) {
      let firstSymbol = str[0].toUpperCase();
      let othesSymbols = str.slice(1);
      return (firstSymbol + othesSymbols);
    }
  else {
    return (str);
  }
}
