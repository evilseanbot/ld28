var step = 0;
var path = 0;
var numOfSteps = 15;
var ghostPortrait: Sprite;
var oldmanPortrait: Sprite;
var broghostPortrait: Sprite;
var blackPortrait: Sprite;

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
    
    if (path == 0) {
        GameObject.Find("Ghost").GetComponent("Possessor").possess(new Vector2(3.53, 1.09));
    } else if (path == 1) {
        GameObject.Find("Ghost").GetComponent("Possessor").possess(new Vector2(3.53, 1.09));
    }

}

function Update() {
    var text;
    var portrait;
    if (path == 0) {
       if (step == 0) {
           text = "Am I cool enough to microwave all my cutlery?";
           portrait = ghostPortrait;
       } else if (step == 1) {
           text = "Yeah, I'm cool enough.";
           portrait = oldmanPortrait;
       } else if (step == 2) {
           text = "But thats pretty much the limit of my cool.";
           portrait = blackPortrait;
       }
    }else if (path == 1) {
	    if (GameObject.Find("DialogText").GetComponent("TextMesh")) {
		    if (step == 0) {
		        text = "I wonder what dolphins are like up close.";
		        portrait = ghostPortrait;
		    } else if (step == 1) {
		        text = "I bet they're cute.";
		        portrait = oldmanPortrait;
		    } else if (step == 2) {
		        text = "I bet they smell.";
		        portrait = blackPortrait;
		    } else if (step == 3) {
		        text = "... I should really take up baking.";
		        portrait = ghostPortrait;
		    } else if (step == 4) {
		        text = "Yeah, thats a great idea.";
		        portrait = oldmanPortrait;
		    } else if (step == 5) {
		        text = "Nah, its too much work.";
		        portrait = blackPortrait;
		    } else if (step == 6) {
		        text = "Geez, what gives?";
		        portrait = ghostPortrait;
		    } else if (step == 7) {
		        text = "Wait, are you a ghost bro?";
		        portrait = broghostPortrait;
		    } else if (step == 8) {
		        text = "Well...";
		        portrait = ghostPortrait;
		    } else if (step == 9) {
		        text = "DUDE! I'm a ghost! I'm already posessing this \n" +
		               "guy. You're totally breaking the ghost code right\n"+ 
		               "now.";
		        portrait = broghostPortrait;
		    } else if (step == 10) {
		        text = "Oh... Sorry. Hey, I'm trying to get people to do\n" +
		               "cool stuff but they're all a bunch of lazy jerks.";
		         portrait = ghostPortrait;
                GameObject.Find("Ghost").GetComponent("Possessor").unpossess(new Vector2(0, 0));	         
		    } else if (step == 11) {
		        text = "People are kind of lazy bro. You had a bunch of\n" +
		                "cool stufff you didn't do when you were alive\n"+
		                "didn't you? They need a kick in the ass.";
		        portrait = broghostPortrait;
		    } else if (step == 12) {
		        text = "Haven't you ever seen that movie Sweet\n"+
		        " November or 500 Days of Summer?";
		        portrait = broghostPortrait;
		    } else if (step == 13) {
		        text = "Uhhh....";
		        portrait = ghostPortrait;
		    } else if (step == 14) {
		        text = "They need some quirky young woman with a\n"+ 
		        "naive sense of wonder messing with their stuff to\n"+
		        "get them all inspired and junk.";
		        portrait = broghostPortrait;
		    } else if (step == 15) {
		        text = "I guess I could try that.";
		        portrait = ghostPortrait;
		    }
		    
		    GameObject.Find("DialogText").GetComponent("TextMesh").text = text;        
		}
	} else if (path == 2) {
        if (GameObject.Find("DialogText").GetComponent("TextMesh")) {	
            text = "Remember bro, Quirky Young Women With Naive \n"+
            "Senses of Wonder. It'll make them do all kinds of \n"+
            "kooky junk";
            portrait = broghostPortrait;
        }
    }
    GameObject.Find("DialogText").GetComponent("TextMesh").text = text; 
    GameObject.Find("ghost-portrait").GetComponent("SpriteRenderer").sprite = portrait;			
    
}

function OnMouseDown() {
    if (step < numOfSteps-1) {
        step++;
    } else {
        if (path == 0) {
            GameObject.Find("BucketList").GetComponent("BucketListItems").haveMicrowaved = true;        
            GameObject.Find("BucketList").GetComponent("BucketListItems").crossOff("microwaved");        
            
            GameObject.Find("Ghost").GetComponent("Possessor").unpossess(new Vector2(0, 0));            
        } else if (path == 1) {
            var mode = GameObject.Find("ModeState").GetComponent("Mode");
            mode.gotMPDGIdea = true;
        }
        
        Destroy(gameObject);
    }
}