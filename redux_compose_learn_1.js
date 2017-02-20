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
  /*var last = fns[fns.length-1];
  var rest = fns.slice(0,-1);
  return rest.reduceRight(function(composed,fn){
    return fn(composed)
  },last())*/
  

  return fns.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined,arguments));
    }
  })
}

var firstFn = test()(function(){
  console.log("store.dispatch");
});

console.log(firstFn)

firstFn();