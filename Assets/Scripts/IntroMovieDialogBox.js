var step = 0;

function Awake () {
}

function Update() {
    if (step == 0) {
        text = "Who's the jackass on the floor? Oh, \nI'm a ghost";
    } else if (step == 1) {
        text = "This is so unfair I didn't even do all that \n cool stuff on the list I made. Boo hoo hoo, life is so short, \n boo hoo hoo, and you only get one.";
    } else if (step == 2) {
        text = "Unless... ghosts can possess people, right? At least I \n can make them do all that cool stuff I  wanted to do.";    
    }
    GameObject.Find("DialogText").GetComponent("TextMesh").text = text;    
}

function OnMouseDown() {
    slideshow = GameObject.Find("Slideshow");
    slideshow.GetComponent("SlideShow").advance();
    Destroy(gameObject);
}