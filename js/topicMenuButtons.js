// function that creates navbar
function addMenuItem(pairedTopicsList) {
	// build-up the topics menu for the navbar
	menuTopics= '';
	for (var i = 0; i < pairedTopicsList.length; i++) {
		menuTopics += '<li><a href="#" onclick="topic = ' + pairedTopicsList[i][0] + '; topicQ = ' + "'" + pairedTopicsList[i][1] + "'" + '; noteTopic(topicQ);alert(' + "'" + 'Please choose total number of quiz questions below.' + "'" + '); smoothScroll(document.getElementById(' + "'" + notifyTopic + "'" + '));"><span class="fa fa-bookmark"></span> '  +  pairedTopicsList[i][1] + '</a></li>';
	}
	// create navbar witn topics menu
	document.getElementById("navBar").innerHTML += '<nav class="navbar navbar-inverse"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="index.html"><img alt="BQ Logo" style="margin-top: -10px" src="BQ-2.png" height="40" width="51"></img></a><a class="navbar-brand" href="index.html">BibleQuiz</a></div><div class="collapse navbar-collapse" id="myNavbar"><ul class="nav navbar-nav"><li class="active"><a href="index.html"><span class="fa fa-home"></span>Home</a></li><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" id ="topicsListNB" href="#"><span class="fa fa-book"></span>Topics<span class="caret"></span></a><ul class="dropdown-menu" id="topicsMenu">' + menuTopics + '</ul></li></ul><ul class="nav navbar-nav navbar-right"><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="fa fa-github"></span> GitHub<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="https://github.com/justineuro/BibleQuiz"><span class="fa fa-github-square"></span> GitHub Site</a></li><li><a href="https://github.com/justineuro/BibleQuiz/archive/master.zip"><span class="fa fa-download"></span> .zip</a></li><li><a href="https://github.com/justineuro/BibleQuiz/archive/master.tar.gz"><span class="fa fa-download"></span> .tar.gz</a></li></ul></div></div></nav>';
}

/* function that creates three -columns table for topics */
  function addTopicsTable(pairedTopicsList) {
	// if number of topics not divisible by 3 extend pairedTopicsList
	var pairs = pairedTopicsList;
	var lackMax = 3 - (pairs.length % 3);
	if (pairs.length % 3 !== 0) {
		for (var lack = 0; lack < lackMax; lack++) {
			pairs.push([[],'[ - ]']);
		}
	}
	// add table caption
	document.getElementById('table1').innerHTML += '<caption><center><h4>Please choose a topic:</h4><center></caption><tbody id=' + "'" + 'table1Body' + "'" + '></tbody>';	
	// generate each table row then add to table body
	for (var i = 0; i < pairedTopicsList.length/3; i++) {
		// generate row; three buttons per row
		var rowContent = '';
		for (var j = 3 * i; j < 3 * (i + 1); j++) {
			if (pairs[j][1] == '[ - ]') {
				rowContent = rowContent + '<td></td>';
			} else {
				rowContent = rowContent + '<td><button id="' + pairs[j][1] + '" type="button" class="btn btn-primary" onclick="topic = ' + pairs[j][0] + '; topicQ = ' + "'" + pairs[j][1] + "'" + '; noteTopic(topicQ);smoothScroll(document.getElementById('+ "'" + 'notifyTopic' + "'" + '));">' + pairs[j][1] + '</button></td>';
			}
		}
		// add newly generated row to the table body
		document.getElementById('table1Body').innerHTML += '<tr align="center">' + rowContent + '</tr>';
	}
}

addMenuItem(pairedTopicsList); // create navbar
addTopicsTable(pairedTopicsList); // create table of topics
