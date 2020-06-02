/*
* @Author: Longguorun
* @Date:   2020-06-01 16:00:51
* @Last Modified by:   longg
* @Last Modified time: 2020-06-01 16:39:00
*/

'use strict';
$(function(){

	$(window).on('scroll',function(){
		var rate = $(window)[0].scrollY / $(".banner").height();
		console.log(rate);
		if(rate >1 ) rate =1;
		$(".searchBox").css("backgroundColor","rgba(230,49,49,"+rate+")");
	});

	// *******************************************************
	var countDown = $(".num");
	var countDownTime = 1*3600,h,m,s;
	var countDownTImer = setInterval(function(){
		h = Math.floor( countDownTime / 60 / 60);
		m = Math.floor( (countDownTime-h*3600) / 60);
		s = Math.floor( countDownTime-h*3600 - m*60 );
		countDown[0].innerText = Math.floor(h /10);
		countDown[1].innerText = h %10;
		countDown[2].innerText = Math.floor(m /10);
		countDown[3].innerText = m %10;
		countDown[4].innerText = Math.floor(s /10);
		countDown[5].innerText = s %10;
		countDownTime--;
	},1000);
});