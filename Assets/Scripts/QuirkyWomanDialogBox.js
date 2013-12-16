var step = 0;
var path = 0;
var numOfSteps = 2;
var MPDG: GameObject;
var ghostPortrait: Sprite;
var womanPortrait: Sprite;
var pwomanPortrait: Sprite;

function Awake() {
    if (GameObject.Find("ModeState")) {
	    var mode = GameObject.Find("ModeState").GetComponent("Mode");
	    
	    if (!GameObject.Find("BucketList").GetComponent("BucketListItems").haveWatchedOz) {
	        path = 0;
	        numOfSteps = 5;
	    } else if (mode.gotMPDGIdea) {
	        path = 2;
	        numOfSteps = 4;
	    } else {
	        path = 1;
	        numOfSteps = 2;
	    }
	}
}

function Update() {
   var portrait;
   var text;
   if (GameObject.Find("DialogText").GetComponent("TextMesh")) {
        if (GameObject.Find("ghost-portrait")) {
		    if (path == 0) {
			    if (step == 0) {
			        text = "Its been a while since I've went swimming.";
			        portrait = ghostPortrait;
			    } else if (step == 1) {
			        text = "Yes... lets keep waiting. It will be more\n"+
			        "exciting that way";
			        portrait = womanPortrait;
			    } else if (step == 2) {
			        text = "Sure, lets stay inside. Is there anything good on \n"+
			        "youtube?";
			        portrait  = ghostPortrait;
			    } else if (step == 3) {
			        text = "Hmmm... Dark Side Of Oz.";
			        portrait = ghostPortrait;
			    } else if (step == 4) {
			        text = "Oh. Huh. That is sort of synced.";
			        portrait = ghostPortrait;
			    }
			    
		    } else if (path == 1) {
			    if (step == 0) {
			        text = "Maybe I should open a window in here.";
			        portrait = ghostPortrait;
			    } else if (step == 1) {
			        text = "Nah, it would just get drafty.";
			        portrait = womanPortrait;
			    }
			} else if (path == 2) {
		 	    if (step == 0) {
			        text = "Hey! How about I go inspire my neighbors with my\n." +
			        "manic revelry?";
			        portrait = ghostPortrait;
			    } else if (step == 1) {
			        text = "Why... why would I want to do that?";
			        portrait = womanPortrait;
		 	    } else if (step == 2) {
			        text = "Well, you feel this evil force growing inside your \n" +
			        "body, and it makes you really want to freak out\n" +
			        "the squares";
			        portrait = ghostPortrait;
			    } else if (step == 3) {
			        text = "Well.... oookay.";
			        portrait = pwomanPortrait;
			    }       	
			}		
			GameObject.Find("DialogText").GetComponent("TextMesh").text = text;
           GameObject.Find("ghost-portrait").GetComponent("SpriteRenderer").sprite = portrait;			
		}
	}
}

function OnMouseDown() {
    if (step < numOfSteps-1) {
        step++;
    } else {
        if (path == 0) {
            GameObject.Find("BucketList").GetComponent("BucketListItems").haveWatchedOz = true;            
        }
    
        if (path == 2) {
            Instantiate(MPDG, new Vector3(0, -1, -1.5), transform.rotation); 
        }
        Destroy(gameObject);
    }    
}