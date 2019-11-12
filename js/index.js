function fgg(){
	$('#hanbao').click(function(){
		$('#caidan').css({
			display:'block',
			zIndex:17,
		})
		$(this).css({
			display:'none'
		})
	})
	
	$('#qx').click(function(){
		$('#caidan').css({
			display:'none'
		})
		$('#hanbao').css({
			display:'block'
		})
	})
}
fgg();
