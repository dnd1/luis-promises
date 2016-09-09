var http = require("q-io/http")

var promise = http.read('http://localhost:7000')

promise.then(function (id) {
	return 'http://localhost:7001/'+id
}).then (http.read)
	.then(JSON.parse)
	.then(console.log)