/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function createCreditsWindow() {

	$("#content").empty();		// Empty the main content page

	$("#content").load("html/credits.html", function() {
		$("<button>Back</button>").addClass("btn btn-primary").attr("onclick", "gameMenu()").appendTo( $("#content") );			// Back to Main Menu key
	});
}

