var hoverText: String;
function OnMouseOver() {
    GameObject.Find("Cursor").GetComponent("MouseCursor").hoverText = hoverText;
}

function OnMouseExit() {
    GameObject.Find("Cursor").GetComponent("MouseCursor").hoverText = "";
}