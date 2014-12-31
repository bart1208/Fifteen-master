/**
 * @author Bart
 */
 
 define(["jquery-2.1.1.min", "jquery.blockUI", "../app/MenuState", "../app/GameState", "../app/ScoreState", "../app/CreditsState"], function($) {
	
	/* Global Variables */
	var table_dimension = 4;		// Dimension of the table (dimension X dimension)
	var time_movement = 100;		// Elements movement time in milisecond. More big, more slow.
	var number_shuffle = 3;			// Number of movements during the shuffle

	var number_elements = table_dimension * table_dimension;	// Number of elements in the table
	
	gameMenu(); 
	
});




/**
 * MAIN FUNCTION
 * Include all javascript file in the project
 */
 /*
$(document).ready(function() {
	$.getScript("js/MenuState.js", function() {
		$.getScript("js/GameState.js", function() {
			$.getScript("js/ScoreState.js", function() {
				$.getScript("js/CreditsState.js", function() {
					gameMenu();
				});
			});
		});
	});
});


$(document).ready(function() {
	gameMenu();
});
* */
