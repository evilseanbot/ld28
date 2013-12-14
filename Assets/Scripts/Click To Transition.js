
var mainCamera;

function Awake() {
    mainCamera = GameObject.FindGameObjectWithTag("MainCamera").transform;
}

function Start () {

}

function Update () {

}

function OnMouseDown() {
    mainCamera.position.x = -3;
    mainCamera.position.y = 2;
    mainCamera.gameObject.camera.orthographicSize = 3;
}