function getElementToNum(value) {
  return Number.parseFloat(value);
}

function getElementWidth(content, padding, border) {
  return getElementToNum(content) + getElementToNum(padding) * 2 + getElementToNum(border) * 2;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
