function findMatching(collection, match) {
 return collection.filter(function (name) { 
   return name.toLowerCase() === match.toLowerCase() 
   })
}
