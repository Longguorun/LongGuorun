/*
* @Author: Longguorun
* @Date:   2020-05-31 18:01:04
* @Last Modified by:   longg
* @Last Modified time: 2020-06-01 11:13:22
*/

window.onload = function(){
	// 定义未知变量
	var sy = 0,my = 0,y = 0,cy = 0;
	var leftContentul = document.getElementsByClassName('leftCotent')[0].children[0];
	var leftContentulli = document.getElementsByClassName('leftCotent')[0].children[0].children;
	var leftContent = document.getElementsByClassName('leftCotent')[0];
	var leftContentHeight = leftContent.clientHeight;
	var ulHeight = leftContentul.clientHeight;
	var ulTopMax = 100;
	var ulBottom = -ulHeight + leftContentHeight;
	var ulBottomMax = ulBottom - ulTopMax;

	leftContentul.addEventListener("touchstart",function(e){
		leftContentul.style.transition = "";
		sy = e.targetTouches[0].clientY;
	});
	leftContentul.addEventListener("touchmove",function(e){
		
		my = e.targetTouches[0].clientY;
		y = cy+ my - sy;
		if(y > ulTopMax) y = 100;
		else if(y < ulBottomMax) y = ulBottomMax;
		leftContentul.style.transform = "translateY("+y+"px)";
	});
	leftContentul.addEventListener("touchend",function(){
		cy = y;
		if(cy >0) {
			leftContentul.style.transition = "all 0.5s";
			leftContentul.style.transform = "translateY(0px)";
			cy = 0;
		}
		if(cy < ulBottom) {
			leftContentul.style.transition = "all 0.5s";
			leftContentul.style.transform = "translateY("+ulBottom+"px)";
			cy = ulBottom;
		}		
	});

	// ul子元素点击事件
	touchEvents.tap(leftContentul,function(e){
		// 清除所有li的样式
		for(var i = 0;i < leftContentulli.length;i++){
			leftContentulli[i].style.backgroundColor = '';
			//上句出现未知错误，为啥？
			leftContentulli[i].children[0].style.color = '#666';
		}
		if(e.target.localName == 'a'){		
			var rep = e.target.parentNode;
			rep.style.backgroundColor = '#fff';
			rep.children[0].style.color = '#e93c3c';	
		}
		else{
			e.target.style.backgroundColor = '#fff';
			e.target.children[0].style.color = '#e93c3c';			
		}
		var selectedIndex = outputIndex(leftContentulli);
		var liHeight = 	leftContentulli[0].clientHeight+1;
		var changeHeight = -selectedIndex*liHeight;
		if(changeHeight <leftContentHeight-ulHeight ) changeHeight = leftContentHeight-ulHeight;
		leftContentul.style.transition = "";
		leftContentul.style.transform = "translateY("+changeHeight+"px)";
		cy = changeHeight;
	});
};

var outputIndex = function(leftContentulli){
	for(var i = 0;i < leftContentulli.length;i++){
		if(leftContentulli[i].style.backgroundColor == 'rgb(255, 255, 255)'){
			return i;			
		}
	}
};