function parsePromised (json) {
	var promise = new Promise (function (f, r) {
		try {
			f(JSON.parse(json))
		}
		catch (e){
			r(e)
		}
	})
	return promise
}

parsePromised(process.argv[2]).then(null, console.log)