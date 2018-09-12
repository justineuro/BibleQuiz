id = '';
idTopicsList = ['Creation','Christmas','Easter','Matthew','Genesis'];
function txtWhite(value,index,array) {
	document.getElementById(value).style.color = 'white';
}
function noteTopic(id) {
	var id = id;
	idTopicsList.forEach(txtWhite);
	document.getElementById(id).style.color = 'yellow';
	document.getElementById(id).style.weight = 'bold';
	document.getElementById("notifyTopic").innerHTML = '<h4>The topic chosen is <b>'+ id + '</b>.  Please select the total number of questions for this quiz below.</h4>';
	document.getElementById("chooseTotalQ").innerHTML =	'<form><div class="form-group"><label for="myTotalQ"><h4>Total questions:</h4><select class="form-control" id="myTotalQ"><option>5</option><option>10</option><option>15</option><option>20</option></select></form><input type="button" onclick="var datAll = getQTotal(topic); dat = datAll[1];" value="Submit">';
}
topicQ = '';
totalQ = '';
topic = [];
dat = [];
function getQTotal(data) {
	var totQIn = document.getElementById("myTotalQ");
	var totalQ = totQIn.options[totQIn.selectedIndex].value;
	var dat = data.slice(0,totalQ);
	loadTopic(topicQ,dat);
	return datAll = [topicQ, dat];
}
