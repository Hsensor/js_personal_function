/**
* byteSize number required
* opt  {}    options
* startUnit BYTE
* use like this 
* conversion(1024*1024*1024) =>1GB
* conversion(1024*1024*1024,{endUnit:"GB"}) =>1024*1024GB
* conversion(1024*1024*1024,{startUnit:"KB"}) =>1TB
* conversion(1024*1024*1024,{startUnit:"KB",endUnit:"GB"}) =>1024*1024GB
* conversion(1024*1024*1024,{needNotUnit:false,endUnit:"GB"}) =>1GB
* conversion(1024*1024*1024,{needNotUnit:false,startUnit:"KB",endUnit:"GB"}) =>1024GB
* conversion(1024*1024,{needNotUnit:true,startUnit:"GB",endUnit:"MB"}) => 1073741824
*/
function conversion(byteSize,opt){
    opt = opt||{};
    if(!byteSize){
        return 0;
    }
    var unit = ["BYTE","KB","MB","GB","TB"];
    var start = 0,end = unit.length-1;

    
    if(opt.startUnit){
        start = unit.indexOf(opt.startUnit.toUpperCase());
    }
    if(opt.endUnit){
        end = unit.indexOf(opt.endUnit.toUpperCase());
    }

    var resultSize = unit_conversion(byteSize, opt, start, end);

    if(!opt.needNotUnit){
        if(typeof opt.decimalCount !=="undefined"){
            return resultSize.size.toFixed(opt.decimalCount) + unit[resultSize.unit];
        }else{
            return resultSize.size + unit[resultSize.unit];
        }
    }else{
        if(typeof opt.decimalCount!=="undefined"){
            return resultSize.size.toFixed(opt.decimalCount);
        }else{
            return resultSize.size;
        }
    }
}

function unit_conversion(byteSize, opt, start, end){
    //10 byte--->mb
    if (opt.endUnit && start < end) {
        start++;
        byteSize = byteSize / 1024;
        return unit_conversion(byteSize, opt, start, end)
    }

    if (opt.startUnit && opt.endUnit && start > end) {
        start--;
        byteSize = byteSize * 1024;
        return unit_conversion(byteSize, opt, start, end);
    }

    if (byteSize >= 1024 && start < end) {
        start++;
        byteSize = byteSize / 1024;
        return unit_conversion(byteSize, opt, start, end) //arguments.callee(byteSize);
    }

    return {size:Number(byteSize),unit:start};
}
console.log(conversion(1024*1024*1024))
console.log(conversion(1024*1024*1024,{endUnit:"GB"}));
console.log(conversion(1024*1024*1024,{startUnit:"KB"}));
console.log(conversion(1024*1024*1024,{startUnit:"KB",endUnit:"GB"}));
console.log(conversion(1024*1024*1024,{needNotUnit:false,startUnit:"KB",endUnit:"GB"}));
console.log(conversion(1024*1024,{needNotUnit:true,startUnit:"GB",endUnit:"MB"}));
console.log(conversion(1024*1024*1024,{needNotUnit:false,endUnit:"GB"}));