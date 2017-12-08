
$(document).ready(function(){
	$(".sidebarBtn").click(function(){
		$(this).toggleClass("toggle");
		$(".sidebar").toggleClass("active");

	});
	$( "#my-slider" ).sliderPro({
		width: "100%",
		height: 500,
		arrows: true,
		buttons: false,
	});
});