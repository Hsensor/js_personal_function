/**
* 递归组合算法
* 从 arr[1...n] 中任选 num(0 < num <= n) 个数的所有组合
*/
Array.prototype.combination = function (num) {
  var r = [];
   (function f(t, a, n) {
       if (n == 0) return r.push(t);
       for (var i = 0, l = a.length; i <= l - n; i++) {
           f(t.concat(a[i]), a.slice(i + 1), n - 1);
       }
   })([], this, num);
   return r;
}


/**
*全排列算法
*
*[1,2,3,4,5];
[1]
[2,3,4,5]
[2],[3],[4],[5]
[3,4,5],[2,4,5],[2,3,5][2,3,4];
[3][4][5]
[4,5][3,5][3,4]
[4][5][3][5][3][4]
[5][4][5][3][4][3]
*/
Array.prototype.Permutation = function (){
    var r = [];
    function Permutation(t,a,n){
        if (n == 0) {
            return r.push(t);   
        } 
            for (var i = 0, l = a.length; i <l; i++) {
                Permutation(t.concat(a[i]), a.slice(0,i).concat(a.slice(i+1,a.length)), n - 1);
            }
    }
    Permutation([],this,this.length);
    return r;
}

/*
*A(m,n)
*排列组合算法
*/ 
Array.prototype.fullPermutation = function (n){
    var combineArr = this.combination(n);
    var tempArr = [];
    for(var i =0;i<combineArr.length;i++){
        tempArr = tempArr.concat(combineArr[i].Permutation());
    }
    return tempArr;
}