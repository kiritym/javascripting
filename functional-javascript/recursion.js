function reduce(arr, fn, initial) {
      // SOLUTION GOES HERE
	if (arr.length == 0){
	  return initial;
	}
	else{
	 return reduce(arr.slice(1), fn, fn(initial, arr[0])); 
	}
	
}

module.exports = reduce
