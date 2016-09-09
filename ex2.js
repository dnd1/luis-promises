var promise = new Promise(function (fulfill, reject) {
	//fulfill('FULFILLED!')
	setTimeout(function () {
		fulfill('FULFILLED!')
	}, 300)
})

promise.then(function (result) {
	console.log(result)
})