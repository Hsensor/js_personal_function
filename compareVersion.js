function compareVersion(versionA,versionB){
  versionA = versionA.split(".");
  versionB = versionB.split(".")
  var minlen = Math.min(versionA.length,versionB.length);

  for(var i = 0;i<minlen; i++){
    if(Number(versionA[i])>Number(versionB[i])){
      return 1;
    } else  if(Number(versionA[i])<Number(versionB[i])){
      return -1;
    }
  }
  if(versionA.length > versionB.length){
    return 1;
  } else if(versionA.length < versionB.length) {
    return -1;
  }
  return 0
}

var versionArr = [["1.0","1.0"],["1.0.1","1.0.0"],["1.0.1","1.0"],["5.0","1.0.1"],["0.1","0.0.1"],["0.1.1","0.1"],["0.1","0.1.1"]]
//0,1,1,1,1,1,-1
for(var i=0;i<versionArr.length;i++){
  console.log(compareVersion(versionArr[i][0],versionArr[i][1]));
}