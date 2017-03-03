function sum(start,end){
  function add(sum,start,end){
    if(start<end){
      return add(sum+start,++start,end)
    } else {
      return sum+start;
    }
  }

  return add(0,start,end)
}

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(5) // 120

function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1) // 120