$(document).ready(function(){
	start();
});

var open = false;

var start = function(){
	$("#menuImageContainer").click(function(event){
		if(!open){
			$(".leftMenuWidth").animate({width:"300px"},{duration:300,specialEasing:{width:'swing'}});
		}else{
			$(".leftMenuWidth").animate({width:"50px"},{duration:300,specialEasing:{width:'swing'}});
		}
		open = !open;
		
	});

	//Show the homepage
	$(".mainContent").hide();
	$("#homePageContent").show();

	//Add listeners for left menu
	$("#homePageMenuItem").click(function(){
		$(".mainContent").hide();
		$("#homePageContent").show();

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#homePageMenuItem").toggleClass("currentContentMenuItem", true);
	});

	$("#educationMenuItem").click(function(){
		$(".mainContent").hide();
		$("#educationContent").show();

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#educationMenuItem").toggleClass("currentContentMenuItem", true);
	});

	$("#projectsMenuItem").click(function(){
		$(".mainContent").hide();
		$("#projectsContent").show();

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#projectsMenuItem").toggleClass("currentContentMenuItem", true);
	});

	$("#achievementsMenuItem").click(function(){
		$(".mainContent").hide();
		$("#achievementsContainer").show();

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#achievementsMenuItem").toggleClass("currentContentMenuItem", true);
	});
}