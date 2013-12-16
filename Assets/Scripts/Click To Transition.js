
var mainCamera;
var sceneName: String;


function Awake() {
    mainCamera = GameObject.FindGameObjectWithTag("MainCamera").transform;
}

function Start () {

}

function Update () {

}

function OnMouseDown() {
    Application.LoadLevel (sceneName);
}