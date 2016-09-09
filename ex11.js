function all(prom1, prom2) {
	var promise = new Promise(function (f, r){
		var counter = 0
		var array = []
		prom1.then(function (result) {
			counter = counter + 1
			array[0] = result
			if (counter === 2) {
				f(array)
			}
		})
	  prom2.then(function (result) {
			counter = counter + 1
			array[1] = result
			if (counter === 2) {
				f(array)
			}
		})
	})
	return promise
}

all(getPromise1(), getPromise2())
	.then(console.log)