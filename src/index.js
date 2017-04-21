
function getIndex(i, l) {
  const m = i % l;
  return m < 0 ? m + l : m;
}

function wrapIndex(i, l) {
  if (Array.isArray(l)) {
    return l[getIndex(i, l.length)];
  }

  return getIndex(i, l);
}

export default wrapIndex;
