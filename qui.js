var pos = 0, test,test_status, question, choice, choices, chA, chB, chC, correct = 0;
 var questions = [
     ["what is 1000+21?", "1002", "1021", "1016", "B"],
	 ["what is 200-9?", "117", "131", "191", "C"],
	 ["what is 10*3?", "30", "24", "25", "A"],
	 ["what is 100/5?", "10", "25", "20", "C"]
 ];
 function _(x){
  return document.getElementById(x);
 }
 function renderQuestion(){
    test = _("test");
	if(pos >= questions.length){
	    test.innerHTML = "You got "+correct+" of "+questions.length+" questions correct";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
 }
 function checkAnswer(){
    choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
	  if(choices[i].checked){
	     choice = choices[i].value;
	  }
	}
	if(choice == questions[pos][4]){
	  correct++;
	}
	pos++;
	renderQuestion();
 }
 window.addEventListener("load", renderQuestion, false);
 