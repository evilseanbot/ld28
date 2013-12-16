var step = 0;
var ghostPortrait: Sprite;
var womanPortrait: Sprite;

function Update() {
    if (GameObject.Find("DialogText")) {
	    if(GameObject.Find("DialogText").GetComponent("TextMesh")) {

		    if (step == 0) {
		        text = "Hahaha, that wasn't a challenge at all.";
		        portrait = ghostPortrait;
		    } else if (step == 1) {
		        text = "Now wait just a darn minute! I'm sick of you\n"+
		               "pushing people around! Its time for you to\n"+
		               "move on!";
		        portrait = womanPortrait;
		    } else if (step == 2) {
		        text = "... Can't I get a last request?";    
		        portrait = ghostPortrait;
		    } else if (step == 3) {
		        text = "Alright, you can have one. Spill it.";    
		        portrait = womanPortrait;
		        GameObject.Find("ModeState").GetComponent("Mode").noMoreDialogBoxes = true;		        
		    } else if (step == 4) {
		        text = "";
		        portrait = ghostPortrait;
		    } else if (step == 5) {
		        text = "";
		        portrait = ghostPortrait;
		    } 
		    GameObject.Find("DialogText").GetComponent("TextMesh").text = text;    
   GameObject.Find("ghost-portrait").GetComponent("SpriteRenderer").sprite = portrait;			
 		    
		}
	}
}

function OnMouseDown() {
    if (step < 5) {
	    slideshow = GameObject.Find("Slideshow");
	    slideshow.GetComponent("SlideShow").advance();
	    Destroy(gameObject);
	}
}