$(document).ready(function(){
	start();
});

var open = false;

var start = function(){

	//$("#menuImageContainer").click(function(event){
	$("#leftMenu").hover(function(event){

		//JQuery likes to mess with the overflow when animating the width, so it is necessary
		//to add the overflow:visible when animating in order to keep the UI from messing up

		if(!open){
			$(".leftMenuWidth").stop();
			$(".leftMenuWidth").animate({width:"300px"},{duration:300,specialEasing:{width:'swing'}}).css('overflow','visible');
		}else{
			$(".leftMenuWidth").stop();
			$(".leftMenuWidth").animate({width:"50px"},{duration:300,specialEasing:{width:'swing'}}).css('overflow','visible');
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

	$("#nextbeatMenuItem").click(function(){
		$(".mainContent").hide();
		$("#nextbeatContainer").show();

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#nextbeatMenuItem").toggleClass("currentContentMenuItem", true);
	});

	$(".skipNB").click(function(){
		$(".mainContent").hide();
		$("#nextbeatContainer").show();

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#nextbeatMenuItem").toggleClass("currentContentMenuItem", true);
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

	$("#scoutsMenuItem").click(function(){
		$(".mainContent").hide();
		$("#scoutsContainer").show();

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#scoutsMenuItem").toggleClass("currentContentMenuItem", true);
	});

	$(".collapsableHeader").click(function(event){
		var childId = 'collapsable-'+event.target.id.split("-")[1]+'-content';
		$("#" + childId).toggleClass("open closed");
		console.log(childId);
	});
}