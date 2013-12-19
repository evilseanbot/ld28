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
         text = "Its kind of neat to see a dead body \n" +
         "just like that, but its not the same as a \n" +
         "ghost. No skin for goosebumps.";
    } else if (path == 1) {
        text = "Whoa. I'm looking at my own dead body \n " +
        "through the eyes of someone else gives me the \n" +
        "mooglies. Knocking this one off the list.";
    } else if (path == 2) {
        text = "Why didn't anyone tell me my calves were so small?";
    }    GameObject.Find("DialogText").GetComponent("TextMesh").text = text;    
}

function OnMouseDown() {
    if (path == 1) {
        GameObject.Find("BucketList").GetComponent("BucketListItems").haveSeenADeadBody = true;
            GameObject.Find("BucketList").GetComponent("BucketListItems").crossOff("seenADeadBody");                
    }

    Destroy(gameObject);
}