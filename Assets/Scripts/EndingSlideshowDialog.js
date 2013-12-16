var step = 0;

function Update() {
    if (GameObject.Find("DialogText")) {
	    if(GameObject.Find("DialogText").GetComponent("TextMesh")) {

		    if (step == 0) {
		        text = "Hahaha, that wasn't a challenge at all.";
		    } else if (step == 1) {
		        text = "Now wait just a darn minute! I'm sick of you\n"+
		        "pushing people around! Its time for you to move on!";
		    } else if (step == 2) {
		        text = "... Can't I get a last request?";    
		    } else if (step == 3) {
		        text = "Alright, you can have one. Spill it.";    
		    } else if (step == 4) {
		        text = "";
		        transform.position.z = 10;
		    } else if (step == 5) {
		        text = "";
		        transform.position.z = 10;
		    } 
		    GameObject.Find("DialogText").GetComponent("TextMesh").text = text;    
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