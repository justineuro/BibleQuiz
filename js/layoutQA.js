function loadTopic(topicQ,topic) {
	document.getElementById("topicsListNB").remove();
	document.getElementById("chooseTopic").remove();
	document.getElementById("notifyTopic").remove();
	document.getElementById("chooseTotalQ").remove();
	/* Build up the Q# button list */
	listQ = '';
	for (var i = 0; i < topic.length; i++) {
		j = i + 1;
		listQ += '<li><a href="#" onclick="i = ' + i + '; genQ(' + i +',dat);">' + j +'</a></li>';
	}
	document.getElementById("main").innerHTML += '<div class="btn-group"><button type="button" class="btn btn-primary">Q#</button><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li><a>Questions</a></li>' + listQ +'</li></ul></div><label><h4>&nbsp;&nbsp; On ' +  topicQ +'</h4></label>';
	document.getElementById("main").innerHTML += '<p id="instructions"><b><u>Instructions</u></b>: Click on <a onclick="genQ(i,dat);"><b>Next Question</b></a> below or <a href="#"><span style="font-size:15px;cursor:pointer" onclick="openNav()"><b>Q#</b></span></a> above to choose a particular question; click the <a href="#"><b>Answer</b></a> link below for the correct answer.</p><br><div id="qa"><div id="question"><a id="qlabel" href="#"><b><u>Question</u>:</b></a></div>		<div id="answer"><a id="alabel" href="#"><b><u>Answer</u>:</b></a></div><br><br><button id="next" type="button" class="btn btn-primary" onclick="genQ(i,dat);">Next Question</button></div><div id="end"><div id="endInfo"></div></div>';
}
