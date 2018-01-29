function findMatching(collection, match) {
 return collection.filter(function (el) { el.toLowerCase() === match.toLowerCase()})
}
