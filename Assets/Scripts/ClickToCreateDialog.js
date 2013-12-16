var dialogBox: GameObject;

function OnMouseDown() {
    Instantiate(dialogBox, new Vector3(0, -2.5, -4), transform.rotation);  
}