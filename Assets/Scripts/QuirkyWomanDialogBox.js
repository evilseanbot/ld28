var step = 0;
var path = 0;
var numOfSteps = 2;
var MPDG: GameObject;

function Awake() {
    if (GameObject.Find("ModeState")) {
	    var mode = GameObject.Find("ModeState").GetComponent("Mode");
	    if (mode.gotMPDGIdea) {
	        path = 1;
	        numOfSteps = 4;
	    } else {
	        path = 0;
	        numOfSteps = 2;
	    }
	}
}

function Update() {
   if (GameObject.Find("DialogText").GetComponent("TextMesh")) {
	    if (path == 0) {
		    if (step == 0) {
		        text = "Maybe I should open a window in here.";
		    } else if (step == 1) {
		        text = "Nah, it would just get drafty.";
		    }
		} else if (path == 1) {
	 	    if (step == 0) {
		        text = "Hey! How about I go inspire my neighbors with my\n." +
		        "manic revelry?";
		    } else if (step == 1) {
		        text = "Why... why would I want to do that?";
	 	    } else if (step == 2) {
		        text = "Well, you feel this evil force growing inside your \n" +
		        "body, and it makes you really want to freak out\n" +
		        "the squares";
		    } else if (step == 3) {
		        text = "Well.... oookay.";
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
            Instantiate(MPDG, new Vector3(0, -1, -1.5), transform.rotation); 
        }
        Destroy(gameObject);
    }    
}