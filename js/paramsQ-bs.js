// initialize variables
topicQ = ''; // question topic
totalQ = ''; // total number of questions for created quiz
topic = []; // data array for topic
dat = []; // truncated data array; depends on totalQ
i = 0; // currently chosen item number

// function to make white foreground for topics button
function txtWhite(value,index,array) {
	document.getElementById(value).style.color = 'white';
	document.getElementById(value).style.background = '';
}

/* function to make yellow the foreground and lighter the background 
 * of chosen topic, motify topic choice, and generate Submit button */
function noteTopic(topicQ) {
	var topicQ = topicQ;
	topicsList.forEach(txtWhite); // in case a new topic is chosen
	document.getElementById(topicQ).style.color = 'yellow';
	document.getElementById(topicQ).style.weight = 'bold';
	document.getElementById(topicQ).style.background = '#007700';
	document.getElementById("notifyTopic").innerHTML = '<h4>The topic chosen is <b>'+ topicQ + '</b>.  Please select the total number of questions for this quiz below.</h4>';
	document.getElementById("chooseTotalQ").innerHTML =	'<form><div class="form-group"><label for="myTotalQ"><h4>Total questions:</h4><select class="form-control" id="myTotalQ"><option>5</option><option>10</option><option>15</option><option>20</option></select></form><input type="button" class="btn btn-info" onclick="var datAll = getQTotal(topic); dat = datAll[1];" value="Submit">';}

// function for truncating data; generating Q & A page
function getQTotal(data) {
	var totQIn = document.getElementById("myTotalQ");
	var totalQ = totQIn.options[totQIn.selectedIndex].value;
	var dat = data.slice(0,totalQ);
	loadTopic(topicQ,dat);
	/* create array of chosen topic and corresponding truncated data
	 * then return */
	return datAll = [topicQ, dat];
}
