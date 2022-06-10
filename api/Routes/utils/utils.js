const topOcurrenceBooks = (bd, AtoZ) => {
  let output = Object.values(
    bd.reduce((obj, { book }) => {
      if (obj[book] === undefined) {
        obj[book] = { bookId: book, occurrence: 1 };
      } else {
        obj[book].occurrence++;
      }
      return obj;
    }, {})
  );
  if (AtoZ) {
    output.sort((a, b) => {
      if (a.occurrence > b.occurrence) {
        return -1;
      }
      if (b.occurrence < a.occurrence) {
        return 1;
      }
      return 0;
    });
  } else {
    output.sort((a, b) => {
      if (a.occurrence > b.occurrence) {
        return 1;
      }
      if (b.occurrence < a.occurrence) {
        return -1;
      }
      return 0;
    });
  }

  return output;
};

module.exports = {topOcurrenceBooks}