/* 
 * MENU STATE
 * Create the menu and browse the various menu items
 */


// MAIN MENU
function gameMenu()
{
	
}

// OPTIONS MENU
function optionsMenu()
{
	$("#content").empty();			// Empty the main content page
	
	var menu = $("<div/>").attr("id", "menu").appendTo( $("#content") );
	$("<div/>").addClass("button").attr("onclick", "tableDimensionMenu()").append("Table dimension").appendTo(menu);
	$("<div/>").addClass("button").attr("onclick", "gameMenu()").append("Back").appendTo(menu);
}

// TABLE DIMENSION MENU
function tableDimensionMenu()
{
	$("#content").empty();			// Empty the main content page
	
	var menu = $("<div/>").attr("id", "menu").appendTo( $("#content") );
	
	// Create menu elements
	$("<div/>").addClass("button X3").click( function() { selectTableDimensionMenu(3); }).append("3 X 3").appendTo(menu);
	
	$("<div/>").addClass("button X4").click( function() { selectTableDimensionMenu(4); }).append("4 X 4").appendTo(menu);
	
	$("<div/>").addClass("button X5").click( function() { selectTableDimensionMenu(5); }).append("5 X 5").appendTo(menu);
	
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
	
	$("<div/>").addClass("button").attr("onclick", "optionsMenu()").append("Back").appendTo(menu);
}