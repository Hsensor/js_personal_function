function conversion(byteSize, opt) {
    if (!byteSize) {
        return 0+"Byte";
    }
    var unit = ["Byte", "KB", "MB", "GB", "TB"];
    var start = 0
      , end = unit.length - 1;
    
    function unit_conversion(byteSize) {
        //10 byte--->mb
        if (opt.endUnit && start < end) {
            start++;
            byteSize = byteSize / 1024;
            return unit_conversion(byteSize)
        }
        
        if (byteSize >= 1024 && start < end) {
            start++;
            byteSize = byteSize / 1024;
            return unit_conversion(byteSize)
            //arguments.callee(byteSize);
        }
        return Number(byteSize);
    }
    if (opt.startUnit) {
        start = unit.indexOf(opt.startUnit.toUpperCase());
    }
    if (opt.endUnit) {
        end = unit.indexOf(opt.endUnit.toUpperCase());
    }
    if (!opt.need_not_unit) {
        if (opt.decimalCount) {
            return unit_conversion(byteSize).toFixed(opt.decimalCount) + unit[start];
        } else {
            return unit_conversion(byteSize) + unit[start];
        }
    } else {
        if (opt.decimalCount) {
            return unit_conversion(byteSize).toFixed(opt.decimalCount);
        } else {
            return unit_conversion(byteSize);
        }
    }
}