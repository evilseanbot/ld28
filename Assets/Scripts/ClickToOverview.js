var mainCamera;

function Awake() {
    mainCamera = GameObject.FindGameObjectWithTag("MainCamera").transform;
}

function Start () {

}

function Update () {

}

function OnMouseDown() {    
    Application.LoadLevel ("Overview");
}