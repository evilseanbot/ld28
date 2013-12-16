var step = 0;
var path = 0;
var numOfSteps = 15;

function Awake() {
    var mode = GameObject.Find("ModeState").GetComponent("Mode");
	if (!GameObject.Find("BucketList").GetComponent("BucketListItems").haveMicrowaved) {
        path = 0;
        numOfSteps = 3;
    } else if (mode.gotMPDGIdea) {
        path = 2;
        numOfSteps = 1;
    } else {
        path = 1;
        numOfSteps = 15;
    }
}

function Update() {
    var text;
    if (path == 0) {
       if (step == 0) {
           text = "Am I cool enough to microwave all my cutlery?";
       } else if (step == 1) {
           text = "Yeah, I'm cool enough.";
       } else if (step == 2) {
           text = "But thats pretty much the limit of my cool.";
       }
    }else if (path == 1) {
	    if (GameObject.Find("DialogText").GetComponent("TextMesh")) {
		    if (step == 0) {
		        text = "I wonder what dolphins are like up close.";
		    } else if (step == 1) {
		        text = "I bet they're cute.";
		    } else if (step == 2) {
		        text = "I bet they smell.";
		    } else if (step == 3) {
		        text = "... I should really take up baking.";
		    } else if (step == 4) {
		        text = "Yeah, thats a great idea.";
		    } else if (step == 5) {
		        text = "Nah, its too much work.";
		    } else if (step == 6) {
		        text = "Geez, what gives?";
		    } else if (step == 7) {
		        text = "Wait, are you a ghost bro?";
		    } else if (step == 8) {
		        text = "Well...";
		    } else if (step == 9) {
		        text = "DUDE! I'm a ghost! I'm already posessing this guy. \nYou're totally breaking the ghost code right now.";
		    } else if (step == 10) {
		        text = "Oh... Sorry. Hey, I'm trying to get people to do cool stuff\n" +
		         " but they're all a bunch of lazy jerks.";
		    } else if (step == 11) {
		        text = "People are kind of lazy bro. You had a bunch of cool stufff\n" +
		        "you didn't do when you were alive didn't you?\n"+
		        " They need something to wake them up.";
		    } else if (step == 12) {
		        text = "Haven't you ever seen that movie Sweet November or\n" +
		        " 500 Days of Summer?";
		    } else if (step == 13) {
		        text = "Uhhh";
		    } else if (step == 14) {
		        text = "They need some quirky young woman with a naive sense of\n" +
		        "wonder messing with their stuff to get them all inspired\n" + 
		        " and junk.";
		    } else if (step == 15) {
		        text = "I guess I could try that.";
		    }
		    
		    GameObject.Find("DialogText").GetComponent("TextMesh").text = text;        
		}
	} else if (path == 2) {
        if (GameObject.Find("DialogText").GetComponent("TextMesh")) {	
            text = "Remember bro, Quirky Young Women With Naive \n"+
            "Senses of Wonder. It'll make them do all kinds of \n"+
            "kooky junk";
        }
    }
    GameObject.Find("DialogText").GetComponent("TextMesh").text = text; 
    
}

function OnMouseDown() {
    if (step < numOfSteps-1) {
        step++;
    } else {
        if (path == 0) {
            GameObject.Find("BucketList").GetComponent("BucketListItems").haveMicrowaved = true;        
        } else if (path == 1) {
            var mode = GameObject.Find("ModeState").GetComponent("Mode");
            mode.gotMPDGIdea = true;
        }
        Destroy(gameObject);
    }
}