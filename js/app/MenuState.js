/* 
 * MENU STATE
 * Create the menu and browse the various menu items
 */

// MAIN MENU
function gameMenu()
{
	$("#content").empty();			// Empty the main content page
	
	var menu = $("<div/>").attr("id", "content-menu").addClass("menu").appendTo( $("#content") );
	$("<button/>").attr("type", "button").addClass("btn btn-primary btn-lg btn-block").click( function() { newGame(); } ).append("New Game").appendTo(menu);
	$("<button/>").attr("type", "button").addClass("btn btn-primary btn-lg btn-block").click( function() { createRankingScore(); } ).append("Score").appendTo(menu);
	$("<button/>").attr("type", "button").addClass("btn btn-primary btn-lg btn-block").click( function() { optionsMenu(); } ).append("Options").appendTo(menu);
	$("<button/>").attr("type", "button").addClass("btn btn-primary btn-lg btn-block").click( function() { createCreditsWindow(); } ).append("Credits").appendTo(menu);
	$("<button/>").attr("type", "button").addClass("btn btn-primary btn-lg btn-block").click( function() {  } ).append("Exit").appendTo(menu);
}

// OPTIONS MENU
function optionsMenu()
{
	$("#content").empty();			// Empty the main content page
	
	var menu = $("<div/>").attr("id", "menu").addClass("menu").appendTo( $("#content") );
	$("<button/>").attr("type", "button").addClass("btn btn-primary btn-lg btn-block").attr("onclick", "tableDimensionMenu()").append("Table dimension").appendTo(menu);
	$("<button/>").attr("type", "button").addClass("btn btn-primary btn-lg btn-block").attr("onclick", "gameMenu()").append("Back").appendTo(menu);
}

// TABLE DIMENSION MENU
function tableDimensionMenu()
{
	$("#content").empty();			// Empty the main content page
	
	var menu = $("<div/>").attr("id", "menu").addClass("menu").appendTo( $("#content") );
	
	// Create menu elements
	$("<button/>").attr("type", "button").addClass("btn btn-primary btn-lg btn-block X3").click( function() { selectTableDimensionMenu(3); }).append("3 X 3").appendTo(menu);
	
	$("<button/>").attr("type", "button").addClass("btn btn-primary btn-lg btn-block X4").click( function() { selectTableDimensionMenu(4); }).append("4 X 4").appendTo(menu);
	
	$("<button/>").attr("type", "button").addClass("btn btn-primary btn-lg btn-block X5").click( function() { selectTableDimensionMenu(5); }).append("5 X 5").appendTo(menu);
	
	selectTableDimensionMenu( table_dimension );
	
	// Select in the menu the table_dimension element
	function selectTableDimensionMenu( dimension ) {
		table_dimension = dimension;
		number_elements = table_dimension * table_dimension;
		
		switch( table_dimension ) {					
			case 3: 
				$(".X3").addClass("select");
				$(".X4").removeClass("select");
				$(".X5").removeClass("select");
				break;
			case 4: 
				$(".X4").addClass("select");
				$(".X3").removeClass("select");
				$(".X5").removeClass("select");
				break;
			case 5: 
				$(".X5").addClass("select");
				$(".X3").removeClass("select");
				$(".X4").removeClass("select");
				break;
		}
	}
	
	$("<button/>").attr("type", "button").addClass("btn btn-primary btn-lg btn-block").attr("onclick", "optionsMenu()").append("Back").appendTo(menu);
}