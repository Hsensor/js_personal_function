Array.prototype.insertionSort = function(cb){
    for(var i=1;i<this.length;i++){
        var new_ele_val = this[i];
        var j = i-1;

        while(j>=0&&cb(this[j],new_ele_val)>0){
            this[j+1] = this[j];
            j--;
        }

        this[j+1] = new_ele_val;

    }
    return this;
}

Array.prototype.binaryInsertionSort=function(cb){
    var self = this;
    for(var i=1;i<self.length;i++){
        var new_ele_val = self[i],left = 0,right = i-1;
        while(left<=right){
            var middle = parseInt((left+right)/2);
            if(cb(new_ele_val,self[middle])<0){
                right = middle - 1;
            }else{
                left = middle + 1;
            }
        }

        for(var j= i -1;j>=left;j--){
            self[j+1] = self[j];
        }
        self[left] = new_ele_val;
    }
    return self;
}

Array.prototype.selectionSort = function(cb){
    var self = this,len=self.length,pIndex,temp;
    for(var i=0;i<len-1;i++){
        var pIndex = i;
        for(var j = i+1;j<len;j++){
            if(cb(self[j],self[pIndex])<0){
                pIndex = j;
            }
        }
        if(pIndex != i ){
            temp = self[pIndex];
            self[pIndex] = self[i];
            self[i] = temp; 
        }
    }
    return self;
}

Array.prototype.bubbleSort = function(cb){
    var self = this,len = self.length,temp;
    for(var i=0;i<len-1;i++){
        /*for(var j=len-1;j>=i;j--){
            if(cb(self[j],self[j-1])<0){
                temp = self[j];
                self[j] = self[j-1];
                self[j-1] = temp;
            }
        }*/
        for(var j = 0;j<len-1-i;j++){
            if(cb(self[j],self[j+1])>0){
                temp = self[j+1];
                self[j+1] = self[j];
                self[j] = temp;
            }
        }
    }
    return self;
}

Array.prototype.quickSort = function(cb){
    var self = this,len = self.length;
    function quickSort(arr){
        if(arr.length<=1){
            return arr;
        }
        var pivotIndex = Math.floor(arr.length/2);
        var pivot = arr.splice(pivotIndex,1)[0];

        var left = [],right = [];
        for(var i = 0;i<arr.length;i++){
            if(cb(arr[i],pivot)<0){
                left.push(arr[i])
            }else{
                right.push(arr[i]);
            }
        }
        return quickSort(left).concat([pivot],quickSort(right));
    }
    
    return quickSort(this);
}