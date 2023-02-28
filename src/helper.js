export const getLS = function () {
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
};

export const saveLS = function (item) {
  const lsArr = getLS();
  lsArr.push(item);
  localStorage.setItem('products', JSON.stringify(lsArr));

  return lsArr;
};

export const removeLS = function (item) {
  const lsArr = getLS();
  const updatedLS = lsArr.filter((value) => value.id !== +item);
  localStorage.setItem('products', JSON.stringify(updatedLS));

  return updatedLS;
};
