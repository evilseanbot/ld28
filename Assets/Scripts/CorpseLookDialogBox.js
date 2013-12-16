var path = 0;

function Awake() {
    if (GameObject.Find("BucketList").GetComponent("BucketListItems").haveSeenADeadBody) {
        path = 2;
    } else if (GameObject.Find("MPDG(Clone)")) {
        path = 1;
    } else {
        path = 0;
    }
}

function Update() {
    var text;
    if (path == 0) {
         text = "Well, I guess I always wanted to look at a dead body. \n it isn't the same when you're a ghost, though, no spine to \ntingle.";        
    } else if (path == 1) {
        text = "Whoa. I'm looking at my own dead body through the eyes \n"+
        "of someone else. Total creep sandwhich. I'm going to \n" +
        "knock this one off the list.";
    } else if (path == 2) {
        text = "Why didn't anyone tell me my calves were so small?";
    }    GameObject.Find("DialogText").GetComponent("TextMesh").text = text;    
}

function OnMouseDown() {
    if (path == 1) {
        GameObject.Find("BucketList").GetComponent("BucketListItems").haveSeenADeadBody = true;
    }

    Destroy(gameObject);
}