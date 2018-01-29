function findMatching(collection, query) {
 return collection.filter(function (name) {
   return name.toLowerCase() === query.toLowerCase() 
   })
}
