/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function createCreditsWindow() {
	
	$("#content").empty();		// Empty the main content page
	
	$("#content").load("html/credits.html", function() { 
		$("<div>Back</div>").addClass("button button_mini").attr("onclick", "gameMenu()").prependTo( $("#content") );			// Back to Main Menu key
	});
	
	
}

