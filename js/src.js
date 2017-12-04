
$(document).ready(function(){
	$(".sidebarBtn").click(function(){
		$(this).toggleClass("toggle");
		$(".sidebar").toggleClass("active");

	});
	$( "#my-slider" ).sliderPro({
		width: "100%",
		height: 380,
		arrows: true,
		buttons: false,


	});
	$(".content").mCustomScrollbar({
		theme:"dark",
		axis:"y", // horizontal scrollbar
	});
});