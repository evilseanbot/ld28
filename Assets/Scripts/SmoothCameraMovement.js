var target = {"x": -1, "y": -1};
var targetSize: float;
function Start () {
    
}

function Update () {
    xDiff = target.x - transform.position.x;
    yDiff = target.y - transform.position.y;
    sizeDiff = targetSize - camera.orthographicSize;
    
    transform.position.x = transform.position.x + (xDiff/2);
    transform.position.y = transform.position.y + (yDiff/2);
    camera.orthographicSize = camera.orthographicSize + (sizeDiff/2);
    
}