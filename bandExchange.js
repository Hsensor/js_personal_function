//n进制转m进制
function bandExchange(number,nBand,mBand){
    var tempArr = [];
    var tempNumber = 0;
    function conversionDecimal(number,nBand){
        for(var i=0;i<number.length;i++){
            tempNumber+=Number(number.charAt(number.length-i-1))*Math.pow(nBand,i)
        }
        return tempNumber;
    }

    //短除法
    /*10/2=5 10%2=0
    5/2=2 5%2=1
    2/2=1 2%2=0
    1/2=0.5 1%2=1
    101/10=10 1
    10/10=1 10%10=0
    1/10<1 1%10 =1*/
    function conversion(number){
        if(number/mBand>=1){
            tempArr.unshift(number%mBand);
            number = Math.floor(number/mBand);
            conversion(number);
        }else{
            tempArr.unshift(number%mBand);
        }
        return tempArr.join("");
    }
    
    //转换为10进制
    //conversionDecimal(number);

    //最终准换位m进制
    return conversion(conversionDecimal(Number(number).toString(),nBand),mBand);
}
console.log(bandExchange(15,6,2));