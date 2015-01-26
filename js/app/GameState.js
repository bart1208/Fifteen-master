/* 
 * GAME STATE
 * Launch the game and manages the various phases of the game 
 */


/* Global Variables */
var table_dimension = 4;		// Dimension of the table (dimension X dimension)
var time_movement = 100;		// Elements movement time in milisecond. More big, more slow.
var number_shuffle = 3;			// Number of movements during the shuffle

var number_elements = table_dimension * table_dimension;	// Number of elements in the table

var anim_running = false; 		// Flag to indicate if there is a animation in running
var next_animation = null;		// Store the id of next animation to run after the current animation
var table_incomplete = true;    // Check if the table is in "win" state
var number_movements = 0;		// Number of movements during the game

var timer_game = 0;				// Time count in seconds
var id_timing = null;			// Id timing to stop the timer



// New Game - Create a table and start game
function newGame() 
{	
	var count = 1;			// Counter
	timer_game = 0;			// Reset time
	number_movements = 0;	// Reset number of movements during the game
	$("#content").empty();		// Empty the main content page
	
	var timer_element = $("<div>Time 00:00</div>").addClass("timer").appendTo( $("#content") );					// DOM element where insert time counter
    
	// Create Table of game
	var table = $("<table/>").addClass("table_game").appendTo( $("#content") );
	for( var i=0; i<table_dimension; i++ ) {
		var tr = $("<tr/>").appendTo(table);
		
		for( var j=0; j<table_dimension; j++ ) {
			var td = $("<td/>").attr("id", count).addClass("element").mousedown( function() { moveElement(this.id);} ).appendTo(tr);
			
			if( count < number_elements ) {
				$("<div />").attr("value", count).css("position", "relative").html(count).appendTo(td);
			}
			else {
				td.addClass("empty");
			}
			count++;
		}
	}
    
    $("<button>Back</button>").attr("type", "button").addClass("btn btn-primary")
    	.click( function() { clearInterval(id_timing); gameMenu(); } ).appendTo( $("#content") );	// Back key in game session
	
    shuffleTable( number_shuffle );   // Shuffle table
	
	// Add timer to the game
	id_timing = setInterval( function() {
            timer_game++; 
            timer_element.html( "Time " + representTime( timer_game ) );
	}, 1000 );
}

// Move an element
function moveElement( id ) 
{
	var empty_element = $(".empty");		// Empty element
	var element_to_move = $("#"+id);		// Element to move
	var content_to_move = $("#"+id+" div");         // Content of element to move
        var distance_movement = content_to_move.height() + 3;
	var direction = canSwap( id, empty_element.attr("id") );		// Check if is possible to move the element and in which direction
	
	if( direction && !anim_running ) {		// If we can move the element and there isn't another animation running, start animation
		anim_running = true;				// Set the start of animation running
		
		switch( direction ) {
		case "up":
			content_to_move.animate( {bottom:distance_movement}, time_movement, "swing", swapElements );
			break;
		case "bottom":
			content_to_move.animate( {top:distance_movement}, time_movement, "swing", swapElements );
			break;
		case "right":
			content_to_move.animate( {left:distance_movement}, time_movement, "swing", swapElements );
			break;
		case "left":
			content_to_move.animate( {right:distance_movement}, time_movement, "swing", swapElements );
			break;
		}
	}
	else if( direction && anim_running ) {		// If there is already an animation to running queues new animation
		next_animation = id;
	}
	
	// Swap content of table elements when finish animation
	function swapElements() {
		content_to_move.attr("style", "position: relative;");
		empty_element.html( element_to_move.html() ).removeClass("empty");		// Move the element in the empty element
		element_to_move.html( "" ).addClass("empty");					// Empty the element to move
		anim_running = false;								// Set the end of animation running
		number_movements++;				// Increase the number of movements during the game
		if( next_animation ) {					// If there is an element in queue move it
			var temp_id = next_animation;
			next_animation = null;
			moveElement( temp_id );
		}
		
		if( checkWin() ) {					// If the player win game...
			clearInterval(id_timing);		// Block timer
			$('#myModal').modal('show');				
		}
	}
	
	// Win conditiones
	function checkWin() {
		var win = true;
		for( var i=1; i<number_elements && win; i++ ) {
			if( $("#"+i+" div").attr("value") != i) {
				win = false;
			}
		}
		return win;
	}
}

// Checks whether the items can be move and return the direction of possible movement.
// to_move = id of element to move; empty_box = id of empty element; table_dimension = side of the square table
function canSwap( to_move, empty_box ) 
{
	var empty_position = "";			// Position of empty box in relation to the box to move.
	
	to_move = Number(to_move);
	empty_box = Number(empty_box);
    
    if (to_move == (empty_box - table_dimension)) {
        empty_position = "bottom";
    }
    else if (to_move == (empty_box + table_dimension)) {
        empty_position = "up";
    }
    else if ( (to_move == (empty_box + 1) ) && ( ((to_move-1) % table_dimension) !== 0) ) {
        empty_position = "left";
    }
    else if ( (to_move == (empty_box - 1) ) && ( (to_move % table_dimension) !== 0 ) ) {
        empty_position = "right";
    }
    return empty_position;
}

// Shuffle a table
function shuffleTable( numbers_movement )
{
	var last_move_element = $(".empty").attr("id");			// Variable to store the last movement element to doesn't move another time'
	
	while( numbers_movement > 0 ) {
		var empty_element = $(".empty");
		var movable_elements = new Array();				// Array of possibles elements to move
		
		for( var i=0; i<number_elements; i++ ) {		// Control if each elemnt is 'movible' and add it in 'movable_elements'
			if( canSwap( i+1, empty_element.attr("id") ) && last_move_element != i+1 ) {
				movable_elements.push(i+1);
			}
		}
		var to_move = Math.floor( Math.random() * movable_elements.length );	// Extract a random element from 'movable_elements'
		last_move_element = empty_element.attr("id");							// Set the last element moved
		
		empty_element.html( $("#"+movable_elements[to_move]).html() ).removeClass("empty");		// Swap elements 1
		$("#"+movable_elements[to_move]).html( "" ).addClass("empty");							// Swap elements 2
		
		numbers_movement--;
	}
}

// Convert seconds of the game in a representation of minutes time eg. (90 seconds => 01:30)
function representTime( time )
{
	if( time < 599 ) {
		return ( "0" + Math.floor(time/60) + ":" + addZero( time % 60 ) );
	}
	else {
		return( Math.floor(time/60) + ":" + addZero( time % 60 ) );
	}

	function addZero( number ) {
		if( number < 10 ) {
			return "0" + number;
		}
		else {
			return "" + number;
		}
	}
}
