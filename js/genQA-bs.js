var i=0;
function genQ(ind,data) {
	var i = ind;
	var dat = data;
	if (i >= dat.length) {
		document.getElementById("question").remove();
		document.getElementById("answer").remove();
		document.getElementById("next").remove();
		document.getElementById("endInfo").innerHTML = '<center><h4>*** End of Quiz! ***</h4><center><br><h4>Use the <a href="#"><b>Q#</b></a> button above to return to a previous number of the quiz or the button below to create a new quiz.</h4><button type="button" class="btn btn-primary" onclick="location.reload()"><b>Create new quiz</b></button>';
	};
	if (i < dat.length) {
		document.getElementById("endInfo").remove();
	}
	var question = dat[i][0];
	qn = i + 1;
	document.getElementById("qa").innerHTML = '<div id="question"><a id="qlabel" href="#"><b><u>Question</u>:</b></a><br></div><br><div id="answer"><a id="alabel" href="#" onclick="genA(i,dat);i += 1;"><b><u>Answer</u>:</b></a><br></div><br><br><button id="next" type="button" class="btn btn-primary" onclick="genQ(i,dat);">Next Question</button>';
	document.getElementById("question").innerHTML +=  '<b>' + qn + '. </b>' + question;
	document.getElementById("end").innerHTML = '<div id="endInfo"></div>';
}

function genA(ind,data) {
	var i = ind;
	var dat = data;
	qn = i + 1;
	var question = dat[i][0];
	var answer = dat[i][1];
	if (document.getElementById("question").innerHTML == '<a id="qlabel" href="#"><b><u>Question</u>:</b></a><br>' + '<b>' + qn + '. </b>' +  question) {
		document.getElementById("answer").innerHTML += answer;
	}
}
