/*
* @Author: Longguorun
* @Date:   2020-05-30 13:28:21
* @Last Modified by:   longg
* @Last Modified time: 2020-05-31 13:53:33
*/
var index = 1;

window.onload = function(){
	searchBoxColor();
	countdonwn();
	rotationChart();
};

// search搜索栏渐变效果
function searchBoxColor(){
	var banner = document.getElementsByClassName('banner')[0];
	var searchBox = document.getElementsByClassName('searchBox')[0];

	window.onscroll = function(){
		var rate = document.documentElement.scrollTop/banner.offsetHeight || document.body.scrollTop/banner.offsetHeight;
		if(rate <= 1){
			searchBox.style.backgroundColor = "rgba(230,49,49,"+rate+")";
		}
	}	
};

// 倒计时
function countdonwn(){
	var clock = document.getElementsByClassName('num');
	var time = 1*60*60;
	var h,m,s;
	var countdownTimer = setInterval(function(){		
		if( time>=0){
			h = Math.floor( time / 60 / 60);
			m = Math.floor( (time-h*3600) / 60);
			s = Math.floor( time-h*3600 - m*60 );
			clock[0].innerText = Math.floor(h /10);
			clock[1].innerText = h %10;
			clock[2].innerText = Math.floor(m /10);
			clock[3].innerText = m %10;
			clock[4].innerText = Math.floor(s /10);
			clock[5].innerText = s %10;
		}
		else{
			clearInterval(countdownTimer);
			return;
		}
		time--;
	},1000);
};

// 轮播图
function rotationChart(){
	var data = {
		"num":5,
		"data1":{
			"src":"uploads/l1.jpg"
		}
	};
	var banner = document.getElementsByClassName('banner_images')[0];
	var firstimg = banner.children[0].cloneNode(true);
	var lastimg = banner.children[data.num-1].cloneNode(true);
	banner.appendChild(firstimg);
	banner.insertBefore(lastimg,banner.children[0]);
	console.log(banner);
	var indexNum = data.num+2;
	// 动态设置banner的宽度
	banner.style.width = indexNum*100 +"%";
	var rate;
	for(var i = 0;i<indexNum;i++){
		rate = 100 / indexNum;
		banner.children[i].style.width = rate +"%";
	}
	banner.style.transform = "translateX("+-(1)*rate+"%)";
	// 动态定时轮播	
	var banner_index = document.getElementsByClassName('banner_index')[0];
	var rotationChartTimer =setInterval(timerFn,2000);
		function timerFn(){	
			index++;
			banner.style.transition = "all 0.3s";
			banner.style.transform = "translateX("+-(index)*rate+"%)";
			indexJudge(banner,rate);
			whitePoint(banner_index);
		}
	// 触摸touchu事件
	var sX,sY,mX,mY,x,touchFlag=true;
	banner.addEventListener("touchstart",function(e){
		clearInterval(rotationChartTimer);
		sX = e.targetTouches[0].clientX;
	});
	banner.addEventListener("touchmove",function(e){
		mX = e.targetTouches[0].clientX;
		x = mX - sX;
		// banner.style.transition = "all 0.3s";
		// banner.style.transform = "translateX("+x+"px)";
	});
	banner.addEventListener("touchend",function(e){
		if(touchFlag){
			touchFlag = false;
			if( x < 0) {
				index++;
				banner.style.transition = "all 0.3s";
				banner.style.transform = "translateX("+-(index)*rate+"%)";

				indexJudge(banner,rate);
				whitePoint(banner_index);
				setTimeout(function(){
					touchFlag = true;
				},400);		
			}
			else {
				index--;
				banner.style.transition = "all 0.3s";
				banner.style.transform = "translateX("+-(index)*rate+"%)";

				indexJudge(banner,rate);
				whitePoint(banner_index);
				setTimeout(function(){
					touchFlag = true;
				},400);
			}
			rotationChartTimer =setInterval(timerFn,2000);			
		}

	});
};

// 小白点更新
function whitePoint(banner_index){
	for(var i = 0;i<banner_index.children.length;i++){
		banner_index.children[i].className = '';
	}
	banner_index.children[index-1].className = "current";
}

// 当index是第一个或最后一个时，纠正
function indexJudge(banner,rate){
	if(index == 6) {
		index = 1;
		setTimeout(function(){
			banner.style.transition = "none";
			banner.style.transform = "translateX("+-(1)*rate+"%)";
		},350);
	}
	if(index == 0) {
		index = 5;
		setTimeout(function(){
			banner.style.transition = "none";
			banner.style.transform = "translateX("+-(5)*rate+"%)";
		},350);
	}
}

