function countWords(inputWords) {
      // SOLUTION GOES HERE
  return inputWords.reduce(function(obj, v){
	  obj[v] = ++obj[v] || 1
	return obj;
	}, {});  
 }


module.exports = countWords
