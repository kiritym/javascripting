function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
	return submittedUsers.every(function(u){
		return goodUsers.some(function(user) {
			return u.id === user.id	
		})
	});
}
}

module.exports = checkUsersValid
