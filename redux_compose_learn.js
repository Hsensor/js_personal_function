function test(){
	var fns = [
		function thunk(next){
			return function thunkT(){
				console.log('thunkT');
				next();
			}
		},
		function promise(next){
			return function promiseT(){
				console.log("promiseT");
				next();
			}
		},
		function createLoger(next){
			return function logger(){
				console.log('logger')
				next();
			}
		}
	]; 
	var last = fns[fns.length-1];
	var rest = fns.slice(0,-1);
	return function(){
		return rest.reduceRight(function(composed,fn){
			console.log("fn",fn.name)
			return fn(composed)
		},last.apply(undefined,arguments));
	}
}

var firstFn = test()(function(){
	console.log("store.dispatch");
});

firstFn();