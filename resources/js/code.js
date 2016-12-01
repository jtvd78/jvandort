$(document).ready(function(){
	start();
});

var open = false;

var setContent = function(id){

	$(".mainContent").toggleClass("currentContent", false);
	$(id).toggleClass("currentContent", true);

	$(".mainContent").hide();
	$(id).css('display','inline-block');
};

var start = function(){

	//$("#menuImageContainer").click(function(event){
	$("#leftMenu").hover(function(event){

		//JQuery likes to mess with the overflow when animating the width, so it is necessary
		//to add the overflow:visible when animating in order to keep the UI from messing up

		if(!open){
			$("#contentSlider").stop();
			$(".leftMenuWidth").stop();
			$(".leftMenuWidth").animate({width:"300px"},{duration:300,specialEasing:{width:'swing'}}).css('overflow','visible');
			$("#contentSlider").animate({width:"250px"},{duration:300,specialEasing:{width:'swing'}});
		}else{
			$(".leftMenuWidth").stop();
			$("#contentSlider").stop();
			$(".leftMenuWidth").animate({width:"50px"},{duration:300,specialEasing:{width:'swing'}}).css('overflow','visible');
			$("#contentSlider").animate({width:"0px"},{duration:300,specialEasing:{width:'swing'}});
		}

		open = !open;
		
	});

	//Show the homepage
	setContent("#homePageContent");

	//Add listeners for left menu
	$("#homePageMenuItem").click(function(){
		setContent("#homePageContent");

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#homePageMenuItem").toggleClass("currentContentMenuItem", true);
	});

	$("#educationMenuItem").click(function(){
		setContent("#educationContent");

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#educationMenuItem").toggleClass("currentContentMenuItem", true);
	});

	//This and the one under it are almost the same
	$("#nextbeatMenuItem").click(function(){
		setContent("#nextbeatContainer");

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#nextbeatMenuItem").toggleClass("currentContentMenuItem", true);
	});

	$(".skipNB").click(function(){
		setContent("#nextbeatContainer");

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#nextbeatMenuItem").toggleClass("currentContentMenuItem", true);
	});

	//Same as this one
	$("#projectsMenuItem").click(function(){
		setContent("#projectsContent");

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#projectsMenuItem").toggleClass("currentContentMenuItem", true);
	});

	$(".skipProj").click(function(){
		setContent("#projectsContent");

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#projectsMenuItem").toggleClass("currentContentMenuItem", true);
	});


	$("#achievementsMenuItem").click(function(){
		setContent("#achievementsContainer");

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#achievementsMenuItem").toggleClass("currentContentMenuItem", true);
	});

	$("#scoutsMenuItem").click(function(){
		setContent("#scoutsContainer");

		$(".menuItemContainer").toggleClass("currentContentMenuItem", false);
		$("#scoutsMenuItem").toggleClass("currentContentMenuItem", true);
	});

	$(".collapsableHeader").click(function(event){
		var childId = 'collapsable-'+event.target.id.split("-")[1]+'-content';
		$("#" + childId).toggleClass("open closed");
		console.log(childId);
	});
};