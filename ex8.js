function attachTitle (string) {
	return ('DR. '+ string)
}

var promise = new Promise (function (f, r) {
	f("MANHATTAN")
})

promise.then(attachTitle).then(console.log)