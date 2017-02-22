const pipeline = (...funcs) =>
  val => funcs.reduce((a, b) => b(a), val);

const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);

addThenMult(5)


function pipeLine(){
	var funs = [].slice.apply(arguments);

	return function(val){
		return funs.reduce(function(a,b){
			return b(a);
		},val)
	}
}

function plus(a){
  return a+1;
}

[1,2,3].reduce(function(a,b){
  return a*b;
},5)