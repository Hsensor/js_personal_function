function getDiff(dateArr){
    var dateReg = /(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
    var timeDiff = ["year","month","day","hour","minute","second"];
    

    var prevDate = dateReg.exec(dateArr[0]).slice(1);
    var nextDate;
    var tempArr = [];
    
    
    for (var i=1; i < dateArr.length; i++) {
        nextDate = dateReg.exec(dateArr[i]).slice(1);
        var dateStrArr = [];
        for(var j=0; j<prevDate.length; j++){
            if(nextDate[j]-prevDate[j]>0){
                dateStrArr.push(nextDate[j]-prevDate[j],timeDiff[j])
            }
        }
        tempArr.push(dateStrArr);
        prevDate = nextDate;
    }

    var startStr = tempArr[0].join("");

    for(var i=1;i<tempArr.length;i++){
        if(tempArr[i].join("")!==startStr){
            return false;
        }
    }
    return startStr;
}

getDiff(["20170101 00:02:01","20170101 05:04:02","20170101 10:06:03","20170101 15:08:04"])


function stringTopN(str){
    var StringArr = ["A","B","C","D","E","F","G","H"];
    var scoreArr = [7,5,3,2,6,1,4];

    var tempArr = [];

    for (var i=0;i<str.length;i++) {
        var temObj = {}
        
        temObj.char = str.charAt(i);
        temObj.score = StringArr.indexOf(str.charAt(i))+1+scoreArr[StringArr.indexOf(str.charAt(i))];
        tempArr.push(temObj);
    }

    return tempArr;
}

var topStr = stringTopN("CFGBA").sort(function(itemA,itemB){
    return -(itemA.score-itemB.score);
});