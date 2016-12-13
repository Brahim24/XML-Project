$(document).ready(function(){
	$(".piechart-part").each(function(i) {
		$(this).hover(function() {
			$(this).css("stroke-width", "2");
			$(this).css("stroke", "white");
			$(".rect-legend:eq("+ i+")").css("stroke-width", "2");
			$(".rect-legend:eq("+ i+")").css("stroke", "white");
		},function() {
			$(this).css("stroke-width", "0");
			$(this).css("stroke", "none");
			$(".rect-legend:eq("+ i+")").css("stroke-width", "0");
			$(".rect-legend:eq("+ i+")").css("stroke", "none");
		});
	});

	$(".rect-legend").each(function(i) {
		$(this).hover(function() {
			$(this).css("stroke-width", "2");
			$(this).css("stroke", "white");
			$(".piechart_part:eq("+ i+")").css("stroke-width", "2");
			$(".piechart_part:eq("+ i+")").css("stroke", "white");
		},function() {
			$(this).css("stroke-width", "0");
			$(this).css("stroke", "none");
			$(".piechart_part:eq("+ i+")").css("stroke-width", "0");
			$(".piechart_part:eq("+ i+")").css("stroke", "none");
		});
	});
	$(".text-legend").each(function(i) {
		$(this).hover(function() {
			$(".rect-legend:eq("+ i+")").css("stroke-width", "2");
			$(".rect-legend:eq("+ i+")").css("stroke", "white");
			$(".piechart-part:eq("+ i+")").css("stroke-width", "2");
			$(".piechart-part:eq("+ i+")").css("stroke", "white");
		},function() {
			$(".rect-legend:eq("+ i+")").css("stroke-width", "0");
			$(".rect-legend:eq("+ i+")").css("stroke", "none");
			$(".piechart-part:eq("+ i+")").css("stroke-width", "0");
			$(".piechart-part:eq("+ i+")").css("stroke", "none");
		});
	});


	function animateThingsOff() {
		var animDuration = 150;

		$(".text-legend").each(function(i) {
			$(this).delay((i*animDuration)).fadeIn(animDuration);
		});
		$(".rect-legend").each(function(i) {
			$(this).delay((i*animDuration)).fadeIn(animDuration);
		});
		$(".piechart-part").each(function(i) {
			$(this).delay((i*animDuration)).fadeIn(animDuration);
		});
	}


	// Animate this shit off \0/
	animateThingsOff();
	
});