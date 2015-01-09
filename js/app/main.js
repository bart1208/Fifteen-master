/**
 * @author Bart
 */
 
 define(["jquery", "bootstrap.min", "modernizr-2.6.2-respond-1.1.0.min", "../app/MenuState", "../app/GameState", "../app/ScoreState", "../app/CreditsState"], function($) {
	
	/* Global Variables */
	var table_dimension = 4;		// Dimension of the table (dimension X dimension)
	var time_movement = 100;		// Elements movement time in milisecond. More big, more slow.
	var number_shuffle = 3;			// Number of movements during the shuffle

	var number_elements = table_dimension * table_dimension;	// Number of elements in the table
	
	gameMenu(); 
	
});
