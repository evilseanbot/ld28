var exitBucketListPF: GameObject;
var crossOut: GameObject;

function OnMouseDown() {
    transform.position.x = 0;
    transform.position.y = 0.5;
    transform.localScale.x = 1.5;
    transform.localScale.y = 1.5;
    GetComponent("BoxCollider2D").size.x = 0;
    GetComponent("BoxCollider2D").size.y = 0;
    var exitBucketList = Instantiate(exitBucketListPF, new Vector3(-0.5, -3, -9), transform.rotation);
       
    var bucketListItems = GetComponent("BucketListItems");
    if (bucketListItems.haveSeenADeadBody) {
        Instantiate(crossOut, new Vector3(-0.32, 1.02, -9), transform.rotation);
    }
    
}