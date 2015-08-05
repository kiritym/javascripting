function getShortMessages(messages) {
var m = messages.map(function(a){return a.message;});
 return m.filter(function(x){
	  return x.length <= 50;
		})    
}

module.exports = getShortMessages
