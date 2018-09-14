// Build-up the topics menu
function addMenuItem(pairedTopicsList) {
	menuTopics= '';
	for (var i = 0; i < pairedTopicsList.length; i++) {
		menuTopics += '<li><a href="#" onclick="topic = ' + pairedTopicsList[i][0] + '; topicQ = ' + "'" + pairedTopicsList[i][1] + "'" + '; noteTopic(topicQ);alert(' + "'" + 'Please choose total number of quiz questions below.' + "'" + '); smoothScroll(document.getElementById(' + "'" + notifyTopic + "'" + '));"><span class="fa fa-bookmark"></span> '  +  pairedTopicsList[i][1] + '</a></li>';
	}
	document.getElementById("navBar").innerHTML += '<nav class="navbar navbar-inverse"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="index.html"><img alt="BQ Logo" style="margin-top: -10px" src="BQ-2.png" height="40" width="51"></img></a><a class="navbar-brand" href="index.html">BibleQuiz</a></div><div class="collapse navbar-collapse" id="myNavbar"><ul class="nav navbar-nav"><li class="active"><a href="index.html"><span class="fa fa-home"></span>Home</a></li><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" id ="topicsListNB" href="#"><span class="fa fa-book"></span>Topics<span class="caret"></span></a><ul class="dropdown-menu" id="topicsMenu">' + menuTopics + '</ul></li></ul><ul class="nav navbar-nav navbar-right"><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="fa fa-github"></span> GitHub<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="https://github.com/justineuro/BibleQuiz"><span class="fa fa-github-square"></span> GitHub Site</a></li><li><a href="https://github.com/justineuro/BibleQuiz/archive/master.zip"><span class="fa fa-download"></span> .zip</a></li><li><a href="https://github.com/justineuro/BibleQuiz/archive/master.tar.gz"><span class="fa fa-download"></span> .tar.gz</a></li></ul></div></div></nav>';
}
/* 
 //This together with paireTopicsList.forEach(addMenuItemForEach) below can also be used
 //to generate the navbar menu for topics
function addMenuItemForEach(value,index,array) {
	//console.log("AddMenu!!!");
	document.getElementById("topicsMenu").innerHTML += '<li><a href="#" onclick="topic = ' + value[0] +'; topicQ = ' + "'" + value[1] + "'" + '; noteTopic(topicQ);alert(' + "'" + 'Please choose total number of quiz questions below.' + "'" + ');">' + value[1]  + '</a></li>';
	//console.log(document.getElementById("topicsMenu").innerHTML);
}
 */

/* Used with paredTopicsList.forEach) below if chooseTopic div insted of table1 is used
function addTopicButton(value,index,array) {
	document.getElementById("chooseTopic").innerHTML += '<button id="' + value[1] + '" type="button" class="btn btn-primary" onclick="topic = ' + value[0] + '; topicQ = ' + "'"+ value[1]  + "'" + '; noteTopic(topicQ);">' + value[1]  + '</button><br><br>';
}
 */
 
 /*
<tr align="center">
	<td><button id="Creation" type="button" class="btn btn-primary" onclick="topic = creation; topicQ = 'Creation'; noteTopic(topicQ);smoothScroll(document.getElementById('notifyTopic'));">Creation</button><br></td>
	<td><button id="Christmas" type="button" class="btn btn-primary" onclick="topic = christmas; topicQ = 'Christmas'; noteTopic(topicQ);smoothScroll(document.getElementById('notifyTopic'));">Christmas</button></td>
	<td><button id="Easter" type="button" class="btn btn-primary" onclick="topic = easter; topicQ = 'Easter'; noteTopic(topicQ);smoothScroll(document.getElementById('notifyTopic'));">Easter</button></td>
</tr>
<tr align="center">
	<td><button id="Genesis" type="button" class="btn btn-primary" onclick="topic = genesis; topicQ = 'Genesis'; noteTopic(topicQ);smoothScroll(document.getElementById('notifyTopic'));">Genesis</button></td>
	<td><button id="Matthew" type="button" class="btn btn-primary" onclick="topic = matthew; topicQ = 'Matthew'; noteTopic(topicQ);smoothScroll(document.getElementById('notifyTopic'));">Matthew</button></td>
	<td><button id="Mark" type="button" class="btn btn-primary" onclick="topic = mark; topicQ = 'mark'; noteTopic(topicQ);smoothScroll(document.getElementById('notifyTopic'));">Mark</button></td>
</tr>
<tr align="center">
	<td><button id="Luke" type="button" class="btn btn-primary" onclick="topic = luke; topicQ = 'luke'; noteTopic(topicQ);">Luke</button></td>
	<td><button id="John" type="button" class="btn btn-primary" onclick="topic = john; topicQ = 'John'; noteTopic(topicQ);">John</button></td>
	<td><button id="Apostles" type="button" class="btn btn-primary" onclick="topic = apostles; topicQ = 'Apostles'; noteTopic(topicQ);">Apostles</button></td>
</tr>
</tbody>
 */

function addTopicsTable(pairedTopicsList) {
	var pairs = pairedTopicsList;
	console.log(pairs.length, pairs.length % 3, 3 - (pairs.length % 3));
	var lackMax = 3 - (pairs.length % 3);
	for (var lack = 0; lack < lackMax; lack++) {
		console.log(pairs);
		pairs.push([[],'[ - ]']);
	}
	console.log(pairs);
	for (var i = 0; i < pairedTopicsList.length/3; i++) {
		console.log(pairedTopicsList.length/3);
		var rowContent = '';
		for (var j = 3 * i; j < 3 * (i + 1); j++) {
			if (pairs[j][1] == '[ - ]') {
				rowContent = rowContent + '<td></td>';
			} else {
				rowContent = rowContent + '<td><button id="' + pairs[j][1] + '" type="button" class="btn btn-primary" onclick="topic = ' + pairs[j][0] + '; topicQ = ' + "'" + pairs[j][1] + "'" + '; noteTopic(topicQ);smoothScroll(document.getElementById('+ "'" + 'notifyTopic' + "'" + '));">' + pairs[j][1] + '</button></td>';
			}
		}
		document.getElementById('table1Body').innerHTML += '<tr align="center">' + rowContent + '</tr>';
	}
}

addMenuItem(pairedTopicsList);
//pairedTopicsList.forEach(addMenuItemForEach);
//pairedTopicsList.forEach(addTopicButton);
addTopicsTable(pairedTopicsList);



