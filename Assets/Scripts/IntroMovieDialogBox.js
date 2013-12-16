var step = 0;

function Awake () {
}

function Update() {

    if(GameObject.Find("DialogText").GetComponent("TextMesh")) {
	    if (step == 0) {
	        text = "Who's the jackass on the floor? Oh, \nI'm a ghost";
	    } else if (step == 1) {
	        text = "This is so unfair, Boo hoo hoo, life is so short, \n"+
	        "boo hoo hoo, and you only get one.";
	    } else if (step == 2) {
	        text = "I never even got to do that list of cool stuff I \n"+
	        "wanted to do";   	        
	    } else if (step == 3) {
	        text = "Unless.. ghosts can possess people, right? Maybe I \n" +
	        "can make other people do all this neat stuff.";    
	    }
	    GameObject.Find("DialogText").GetComponent("TextMesh").text = text;    
	}
}

function OnMouseDown() {
    slideshow = GameObject.Find("Slideshow");
    slideshow.GetComponent("SlideShow").advance();
    Destroy(gameObject);
}