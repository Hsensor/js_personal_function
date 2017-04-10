function JSONP (url, config, callback) {
    if (callback && typeof callback === "function") {
        if(config.params){
            var tempPair = [];
            for(var attr in config.params) {
                tempPair.push(attr+""+params[attr]);
            }
        }

        if (url.indexOf("?")>-1) {
            url+=tempPair.join("&");
        } else {
            url+="?"+tempPair.join("&");

        }
    } else {
        if (config.callback && typeof config.callback === "function") {
            callback = config.callback;
            
            if (config.params) {
                var tempPair = [];
                for(var attr in config.params) {
                    tempPair.push(attr+""+params[attr]);
                }
            }

            if (url.indexOf("?") > -1) {
                url+=tempPair.join("&");
            } else {
                url+="?"+tempPair.join("&");

            }
        } else if (typeof config === "function") {
            callback = config;

            if (url.indexOf("?") === -1) {
                url+="?";
            }
        }

    }
    var Script = document.createElement('script');

    var randFnKey = "hello"+Math.random();
    JSONP[randFnKey] = function(res){
        callback(res);
        delete JSONP[randFnKey];
        document.body.removeChild(Script);
    };

    Script.src = url+'callback=JSONP["'+randFnKey+'"]';

    document.body.appendChild(Script);

}

JSONP("/TEST",function (result) {
    alert(JSON.stringify(result));
})