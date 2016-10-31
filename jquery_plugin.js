(function($){


	function ToolTip(element,option){

	}


	function Plugin(option){
		//this is a jQuery instance
		//Plugin return jQuery instance
		return this.each(function(){
			var $this = $(this);
			var data = $this.data('bs.tooltip');
			var options = typeof option=='object'&&option;

			if (!data && /destroy|hide/.test(option)) return
	      	
	      	//设置$this.data('bs.tooltip') 作为Tooltip 实例
	      	if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))

	      	if (typeof option == 'string') data[option]()
		});
	}

	
	$.fn.toolTip =  Plugin;
	$.fn.toolTip.Contructor = ToolTip;

})(jQuery)