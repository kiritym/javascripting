function duckCount() {

 return  Array.prototype.slice.call(arguments).filter(function(f){
	return Object.prototype.hasOwnProperty.call(f, 'quack');

  }).length;
}

module.exports = duckCount
