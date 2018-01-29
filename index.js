function findMatching(collection, query) {
 return collection.filter(function (name) {
   return name.toLowerCase() === query.toLowerCase();
   })
}

function fuzzyMatch(collection, query) {
  return collection.filter(function (letter) {
    return letter.toUpperCase() === query[0].toUpperCase()
  }) 
}