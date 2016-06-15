var strArr = [
    "5",
    "5.",
    "05.",
    "+05.",
    "+50.",
    "50.",
    "-05.",
    "05",
    "+05",
    "50",
    "501"
]
//var reg = /^\+?(?=(0[1-9]|[1-9]\d{0,1}))\d{0,2}(?=\.{0,1}$)/;
var reg = /^\+?(?=(0[1-9]|[1-9]\d{0,1}))\d{0,2}$/;
// 05 +05 50 5 true
for(var i=0;i<strArr.length;i++){
    console.log(reg.test(strArr))
}

//var reg=/^(0(\.\d{0,2})?|1(\.0{1,2})?)$/;
//0. false
var reg = /^(0(\.(?!0+$)\d{0,2})?|1(\.0{1,2})?)$/;
//0.0,0.00 false 否定预测
var strArr = [
    "0.",
    "0",    
    "0.0",
    "0.00",
    "0.01",
    "1",
    "1.0",
    "1.00"
]
for(var i=0;i< strArr.length;i++){
    console.log(reg.test(strArr[i]));
}

