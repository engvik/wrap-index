function wrapIndex(i, l) {
  var m = i % l;
  return m < 0 ? m + l : m;
}

module.exports = wrapIndex;
