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
    function haha(next){
      return function hahaT(){
        console.log("hahaT");
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
  return fns.reduce(function (a, b) {
    console.log("a",a.toString());
    return function () {
      return a(b.apply(undefined,arguments));
    }
  })
}

//第一次a thunk
//后面的a一直就是function(){return a(b.apply(undefined,arguments))}
//这尼玛就是一个递归调用
var firstFn = test()(function(){
  console.log("store.dispatch");
});

console.log("start ....")
firstFn();