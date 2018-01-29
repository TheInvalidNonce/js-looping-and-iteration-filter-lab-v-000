function findMatching(collection, query) {
 return collection.filter(function (name) {
   return name.toLowerCase() === query.toLowerCase();
   })
}

function fuzzyMatch(collection, query) {
  return collection.filter(function (letter) {
    return letter[0] === query[0]
  }) 
}

function matchName(collection, query) {
  for (const name in collection) {
    return collection.filter(function (name) {
      collection.name === query
    })
  }
}