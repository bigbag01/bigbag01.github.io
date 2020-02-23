//jquery插件，依赖于jquery
(function($){
	var defaults = {
		repeat:true,
		speed:200,
		symbol:'_'
	};
	function add(obj,options){
		var content = obj.html();
		var str;
		var strlen = 0;
		var t = setInterval(function(){
			str = content.substr(0,strlen) + (strlen == content.length ? "" : options.symbol);
			obj.html(str);
			if(strlen == content.length){
				clearInterval(t);
				if(options.repeat==true)
					add(obj,options);
			}
			strlen+=1;
		},options.speed);
	}
	$.fn.extend({
		Type:function(options){
			var opts = $.extend(defaults,options);
			return this.each(function(){
				var $this = $(this);
				add($this,opts);				
			})
		}
	})
})(window.jQuery);