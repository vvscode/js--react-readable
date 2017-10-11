export default (list, sortBy) => {
  if (!sortBy) {
    return list;
  }

  let isReverse = sortBy[0] === "-";
  let sortPropName = isReverse ? sortBy.substr(1) : sortBy;
  let ret = [...list].sort((x, y) => {
    let a = x[sortPropName];
    let b = y[sortPropName];
    return a > b ? 1 : a < b ? -1 : 0;
  });
  if (isReverse) {
    ret = ret.reverse();
  }
  return ret;
};
