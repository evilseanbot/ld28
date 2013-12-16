var step = 0;
var path = 0;
var numOfSteps = 2;

function Awake() {
    if (GameObject.Find("ModeState")) {
	    var mode = GameObject.Find("ModeState").GetComponent("Mode");
	    
	    if (!GameObject.Find("MPDG(Clone)")) {
	        path = 0;
	        numOfSteps = 2;
	    } else {
	        path = 1;
	        numOfSteps = 7;
	    }	    
	}
}

function Update() {
   if (GameObject.Find("DialogText").GetComponent("TextMesh")) {
	    if (path == 0) {
		    if (step == 0) {
		        text = "Pencils down. Its Dolphin Time!.";
		    } else if (step == 1) {
		        text = "Actually... I really should work on my\n." +
		        "finances first.";
		    }
		    
	    } else if (path == 1) {
		    if (step == 0) {
		        text = "Can I help you find something?.";
		    } else if (step == 1) {
		        text = "AAAAAAAaaaaa. Nooooooooo\n"+
		        "The fun part is looking.";
		    } else if (step == 2) {
		        text = "You think so? Well, I'm pretty\n"+
		        "busy right now.";
		    } else if (step == 3) {
		        text = "AAAAAAAGGGHHHhhh. Forsake your\n"+
		        "responsibilities. Embrace the void.";
		    } else if (step == 4) {
		        text = "You know, I think you're right!\n"+
		        "I feel like I could do anything with you!.";
		    } else if (step == 5) {
		        text = "Now's my chance...";
		    } else if (step == 6) {
		        text = "I could jump out a window!";
		    }
		}		    
		GameObject.Find("DialogText").GetComponent("TextMesh").text = text;
	}
}

function OnMouseDown() {
    if (step < numOfSteps-1) {
        step++;
    } else {
        if (path == 1) {
           // Play ending.
        }
    
        Destroy(gameObject);
    }    
}