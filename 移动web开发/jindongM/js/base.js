/*
* @Author: Longguorun
* @Date:   2020-05-31 19:45:21
* @Last Modified by:   longg
* @Last Modified time: 2020-06-01 10:18:42
*/
var start_x,start_y,start_time,distance_x,distance_y;
var touchEvents =
{

	tap:function(dom,callback)
	{
		function fn1(e){
			if(e.targetTouches.length > 1) {return;}
			start_x = e.targetTouches[0].clientX;
			start_y = e.targetTouches[0].clientY;
			start_time = Date.now();			
		};
		function fn2(e){
			if(Date.now() - start_time >250) {return;}
			distance_x = e.changedTouches[0].clientX - start_x;
			distance_y = e.changedTouches[0].clientY - start_y;
			if(Math.abs(distance_x)>6 || Math.abs(distance_y)>6) {return;}
			if(callback) callback(e);			
		};
		if(dom && typeof(dom) == 'object') 
		{
			dom.addEventListener('touchstart',fn1);
			dom.addEventListener('touchend',fn2);			
		}
		else return;
	} 
};