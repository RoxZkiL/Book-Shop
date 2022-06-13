const topOcurrenceBooks = (bd, ascendente) => {
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
  if (ascendente) {
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

const idGroups = (dataBase) => {
  const allGroupsArray = [];
  for (let i = 0; i < dataBase.length; i++) {
    let currentGifter = dataBase[i].gifter;
    let currentGifted = dataBase[i].gifted;
    let GroupArray = [currentGifter, currentGifted];

    for (let j = 0; j < dataBase.length; j++) {
      if (currentGifter === dataBase[j].gifter)
        GroupArray.push(dataBase[j].gifted);
      if (currentGifted === dataBase[j].gifted)
        GroupArray.push(dataBase[j].gifter);
      if (currentGifter === dataBase[j].gifted)
        GroupArray.push(dataBase[j].gifter);
      if (currentGifted === dataBase[j].gifter)
        GroupArray.push(dataBase[j].gifted);
    }
    GroupArray.sort((n1, n2) => n1 - n2);
    const filt = [...new Set(GroupArray)];
    allGroupsArray.push(filt);
  }
  const splitArray = (bd) => {
    let contains = false;
    for (let i = 0; i < bd.length; i++) {
      for (let j = i + 1; j < bd.length; j++) {
        let aux = bd[i];
        let aux2 = bd[j];
        for (let k = 0; k < aux.length; k++) {
          for (let h = 0; h < aux2.length; h++) {
            if (aux[k] === aux2[h]) contains = true;
          }
        }
        if (contains) {
          bd[i] = [...bd[i], ...bd[j]];
          bd[j] = [];
          contains = false;
        }
      }
    }
    return bd
      .filter((bd) => bd.length > 0)
      .map((bd) => [...new Set(bd)].sort((n1, n2) => n1 - n2));
  };

  return splitArray(splitArray(allGroupsArray));
};

module.exports = { topOcurrenceBooks, idGroups };

/* const absoluteArray = [];
const bannedId = [];
for(let index = 1; index < allGroupsArray.length + 1; index++) {
  let matchedArray = [];
  let match = false;
  if (!bannedId.includes(index)) {
    for (let x = 0; x < allGroupsArray.length; x++) {
      if (allGroupsArray[x].includes(index)) {
        matchedArray.push(allGroupsArray[x]);
        match = true;
      }
    }
  }
  if (match) {

    const forBan = [...new Set(matchedArray.flat(Infinity))];
    for (let y = 0; y < forBan.length; y++) {
      bannedId.push(forBan[y]);
    }
    absoluteArray.push(forBan);
  }
} */

/* 
  const absoluteArray = [];

  let bannedId = [];
  for (let x = 0; x < allGroupsArray.length; x++) {
   let currentArray = allGroupsArray[x]
    for (let z = 0; z < currentArray.length; z++) {
      let currentId = currentArray[z];
      let matchedArray = []
      let match = false
      if(!(bannedId.includes(currentId))){
      for (let y = 0; y < allGroupsArray.length; y++) {
        if(allGroupsArray[y].includes(currentId)){
          match = true
          matchedArray.push(allGroupsArray[y])
        }
      }

      if(match){
        bannedId.push(currentId)

      const clean = [...new Set(matchedArray.flat(Infinity).sort((n1, n2) => n1 - n2))]
      for (let k = 0; k < clean.length; k++) {
        bannedId.push(clean[k])
      }
      absoluteArray.push(clean)
      }
      
    }
   
  }
  
}
 */
