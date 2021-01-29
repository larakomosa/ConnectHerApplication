const checkFavorite = (data) => {
  let bool = false;

  if (data.array !== undefined) {
    for (let i = 0; i < data.array.length; i++) {
      if (data.id == data.array[i]) {
        bool = true;
      }
    }
  }
  return bool;
};
export default checkFavorite;
