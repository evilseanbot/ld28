var step = 0;
var path = 0;
var numOfSteps = 2;
var ghostPortrait: Sprite;
var pwomanPortrait: Sprite;
var outgoingPortrait: Sprite;

function Awake() {
    if (GameObject.Find("ModeState")) {
	    var mode = GameObject.Find("ModeState").GetComponent("Mode");
	    
	    if (!GameObject.Find("MPDG(Clone)")) {
	        path = 0;
	        numOfSteps = 2;
            GameObject.Find("Ghost").GetComponent("Possessor").possess(new Vector2(3.53, 0.59));
	        
	    } else {
	        path = 1;
	        numOfSteps = 7;
	    }	    
	}
}

function Update() {
   var text;
   var portrait;
   if (GameObject.Find("DialogText").GetComponent("TextMesh")) {
	    if (path == 0) {
		    if (step == 0) {
		        text = "Pencils down. Its Dolphin Time!";
		        portrait = ghostPortrait;
		    } else if (step == 1) {
		        text = "Actually... I really should work on my\n" +
		        "finances first.";
		        portrait = outgoingPortrait;
		    }
		    
	    } else if (path == 1) {
		    if (step == 0) {
		        text = "Can I help you find something?";
		        portrait = outgoingPortrait;
		    } else if (step == 1) {
		        text = "AAAAAAAaaaaa. Nooooooooo.\n"+
		        "The fun part is looking.";
		        portrait = pwomanPortrait;
		    } else if (step == 2) {
		        text = "You think so? Well, I'm pretty\n"+
		        "busy right now.";
		        portrait = outgoingPortrait;
		    } else if (step == 3) {
		        text = "AAAAAAAGGGHHHhhh. Forsake your\n"+
		        "responsibilities. Embrace the void.";
		        portrait = pwomanPortrait;
		    } else if (step == 4) {
		        text = "You know, I think you're right!\n"+
		        "I feel like I could do anything with you!.";
		        portrait = outgoingPortrait;
		    } else if (step == 5) {
		        text = "Now's my chance...";
		        portrait = ghostPortrait;
                GameObject.Find("Ghost").transform.position.x = 0;
                GameObject.Find("Ghost").transform.position.y = 0;		        
                GameObject.Find("Ghost").GetComponent("Possessor").unpossess(new Vector2(0, 0));         		        
		    } else if (step == 6) {
		        text = "I could jump out a window!";
		        portrait = ghostPortrait;
                GameObject.Find("Ghost").GetComponent("Possessor").possess(new Vector2(3.53, 0.59));         		        		        
		    }
		}		    
		GameObject.Find("DialogText").GetComponent("TextMesh").text = text;
        GameObject.Find("ghost-portrait").GetComponent("SpriteRenderer").sprite = portrait;			
		
	}
}

function OnMouseDown() {
    if (step < numOfSteps-1) {
        step++;
    } else {
        if (path == 0) {
           GameObject.Find("Ghost").GetComponent("Possessor").unpossess(new Vector2(0, 0));         
        }
    
        if (path == 1) {
           Destroy(GameObject.Find("ModeState"));
           Application.LoadLevel("falling");
        }
    
        Destroy(gameObject);
    }    
}