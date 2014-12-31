/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

// Class Score
function Score( name, time, movements, date ) {
	this.name = name;
	this.time = time;
	this.movements = movements;
	this.date = date;
}

var scores = new Array();			// Array of "score" objects

var number_elements_ranking = 20;



// Create ranking table
function createRankingScore()
{
	if( localStorage.ranking ) {		// Put in "score" the conten of "localStorage.ranking" if existe
		scores = $.parseJSON( localStorage.ranking );
	}
	
	$("#content").empty();		// Empty the main content page
	
	$("<div>Back</div>").addClass("button button_mini").attr("onclick", "gameMenu()").appendTo( $("#content") );			// Back to Main Menu key
	$("<div>Reset</div>").addClass("button button_mini").click( function() { delateSavedGame(); createRankingScore(); }).appendTo( $("#content") );	// Reset Saved Game
	
	var table = $("<table/>").addClass("table_score").appendTo( $("#content") );
	$("<tr/>")
			.append($("<th/>").html("Position"))
			.append($("<th/>").html("Name"))
			.append($("<th/>").html("Time"))
			.append($("<th/>").html("Movements"))
			.append($("<th/>").html("Date"))
			.appendTo(table);
	
	for( var i=0; i<scores.length; i++ ) {
		var tr = $("<tr/>").appendTo(table);
		
		$("<td/>").html(i+1).appendTo(tr);

		for( var key in scores[i] ) {
			var td = $("<td/>").appendTo(tr);
			
			if( key == "date" ) {
				td.html( scores[i][key] );
			}
			else if( key == "time" ) {
				td.html( representTime( scores[i][key] ) );
			}
			else {
				td.html( scores[i][key] );
			}
		}
	}
	scores = null;
}

// Save score
function saveScore( player_name )
{
	var rank = new Array();
	if( localStorage.ranking ) {
		rank = $.parseJSON( localStorage.ranking );
	}
	var date = new Date();
	
	var new_score = new Score( player_name, timer_game, number_movements, date.toLocaleString() );
	
	for( var i=0; i<number_elements_ranking; i++ ) {
		if( !rank[i] ) {
			rank.push(new_score);
			break;
		}
		else if( timer_game < rank[i].time ) {
			rank.splice( i, 0, new_score );
			break;
		}
	}
	
	if( rank.length > number_elements_ranking ) {
		rank.pop();
	}
	
	localStorage.ranking = JSON.stringify( rank );
}

// Reset Table Score
function delateSavedGame()
{
	if( localStorage.ranking ) {
		localStorage.ranking = "";
	}
}