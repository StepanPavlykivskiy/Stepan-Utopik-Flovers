
$(document).ready(function(){
	$(".sidebarBtn").click(function(){
		$(this).toggleClass("toggle");
		$(".sidebar").toggleClass("active");
		$(".container").mCustomScrollbar();

	});
	$( "#my-slider" ).sliderPro({
		width: "100%",
		height: 500,
		arrows: true,
		buttons: false,
	});
	// $('#menu').perfectScrollbar();    
	// $('#menu').perfectScrollbar({});   // with options
	// $('#menu').perfectScrollbar('update');  // Update
	// $('#menu').perfectScrollbar('destroy');
	// var ps = new PerfectScrollbar('.container');

});