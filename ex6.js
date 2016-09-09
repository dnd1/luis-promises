var promise = Promise.resolve('Fulfilled')
var promise = Promise.reject('Rejected!')
promise.catch(function (error) {
	console.error("ERROR!")
	console.error(err.message)
})  