function wrapIndex(i, l) {
  const m = i % l;
  return m < 0 ? m + l : m;
}

module.exports = wrapIndex;
