//TODO 依赖于jquery 封装成插件
$(function(){
	function Type(obj, speed){
		this.obj = obj;
		this.speed = speed;
	}
	Type.prototype = {
		init : function(){
			var str = this.obj.html();
			this.add(str);
		},
		add : function(con){
			var me = this;
			var str;
			var strlen = 0;
			var t = setInterval(function(){
				str = con.substr(0, strlen) + "_";
				if(strlen == con.length)
					str=str.slice(0,-1);
				me.obj.html(str);

				//内容打印完毕
				if(strlen == con.length){
					clearInterval(t);
					a.init();
				}
				strlen = strlen + 1;
			}, me.speed);
		}
	}
	// 打字效果元素与内容来自于拥有 typing class的元素
	var a = new Type($('.typing'), 200);
	a.init();
});