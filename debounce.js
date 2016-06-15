 /**
* 频率控制函数， fn执行次数不超过 1 次/delay
* @param fn{Function}     传入的函数
* @param delay{Number}    时间间隔
* @param options{Object}  如果想忽略开始边界上的调用则传入 {leading:false},
*                         如果想忽略结束边界上的调用则传入 {trailing:false},
* @returns {Function}     返回调用函数
*/

function throttle(fn,delay,options){
	var wait =false;
	options = options||{};
	return function(){
		var that = this,args = arguments;
		if(!wait){
			if(!(options.leading===false)){
				fn.apply(that,args);
			}
			wait = true;
			setTimeout(function(){
				if(!(options.trailing===false)){
					fn.apply(that,args);
				}
				wait = false;
			},delay);
		}
	}
}

/**
 * 空闲控制函数， fn仅执行一次
 * @param fn{Function}     传入的函数
 * @param delay{Number}    时间间隔
 * @param options{Object}  如果想忽略开始边界上的调用则传入 {leading:false},
 *                         如果想忽略结束边界上的调用则传入 {trailing:false},
 * @returns {Function}     返回调用函数
 */
function debounce(fn,delay,options){
	var timeoutId,leadingExc = false;
	options = options||{};

	return function(){
		var that = this,args = arguments;
		if(!leadingExc&&!(options.leading === false)){
			fn.apply(that,args);
		}
		leadingExc = true;
		if(timeoutId){
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(function(){
			if(!(options.trailing===false)){
				fn.apply(that,args);
			}
			leadingExc = false;
		},delay)
	}
}