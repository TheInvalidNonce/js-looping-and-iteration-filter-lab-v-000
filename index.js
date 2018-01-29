function findMatching(collection, match) {
 return collection.filter(function (name) { name.toLowerCase() === match.toLowerCase() } )
}
