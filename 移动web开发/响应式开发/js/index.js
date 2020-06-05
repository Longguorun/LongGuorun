/*
* @Author: Longguorun
* @Date:   2020-06-04 11:24:41
* @Last Modified by:   longg
* @Last Modified time: 2020-06-05 13:46:12
*/

'use strict';
$(function(){
	var bigImg = $(".bigImg");
	var smallImg = $(".smallImg");

	$(window).on('resize',function(){
		var w = $(this).width();
		if( w <=768) {	
			$.each(smallImg,function(i,n){
				var src =  $(n).data('small') ;
				var img = $('<img src='+src+'>');			
				$(n).html(img);
			});
		}
		else {
			$.each(bigImg,function(i,n){
			var src = $(n).data('large');
			$(n).css('backgroundImage','url('+src+')');
	});
		}
	}).trigger('resize');


	$('[data-toggle="tooltip"]').tooltip();

	console.log($('#p-nav-tabs li'));
	var p_nav_li = $('#p-nav-tabs li');
	var ul_width = 0;
	for(var i = 0;i <p_nav_li.length; i++){
		ul_width += 10 + $(p_nav_li[i]).width();
	}
	console.log(ul_width);
	$('#p-nav-tabs').width(ul_width);
	var wrapper = document.getElementById('wrapper');
	var myScroll = new IScroll(wrapper,{
		    mouseWheel: true,
		    scrollX: true,
   			scrollY: false,

			click: true,
			// keyBindings: true,
			disablePointer:true,
			disableTouch:false,
			// disableMouse:true
	});
});