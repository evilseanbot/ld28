function Update() {
    GameObject.Find("DialogText").GetComponent("TextMesh").text = "Well, I guess I always wanted to look at a dead body. \n it isn't the same when you're a ghost, though, no spine to \ntingle.";        
}

function OnMouseDown() {
    Destroy(gameObject);
}