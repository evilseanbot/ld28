var exitBucketListPF: GameObject;
var crossOut: GameObject;

var smallBL: Sprite;
var largeBL: Sprite;

function OnMouseDown() {
    GetComponent("SpriteRenderer").sprite = largeBL;
    transform.position.x = 0;
    transform.position.y = 0.5;
    transform.localScale.x = 1.5;
    transform.localScale.y = 1.5;
    GetComponent("BoxCollider2D").size.x = 0;
    GetComponent("BoxCollider2D").size.y = 0;
    var exitBucketList = Instantiate(exitBucketListPF, new Vector3(0, -4, -9), transform.rotation);
       
    var bucketListItems = GetComponent("BucketListItems");
    
    if (bucketListItems.haveSeenADeadBody) {
        Instantiate(crossOut, new Vector3(-0.52, -0.65, -9), transform.rotation);
    }

    if (bucketListItems.haveWatchedOz) {
        Instantiate(crossOut, new Vector3(-0.52, -1.4, -9), transform.rotation);
        Instantiate(crossOut, new Vector3(-0.52, -2.0, -9), transform.rotation);        
        Instantiate(crossOut, new Vector3(-0.52, -2.6, -9), transform.rotation);                
    }            
    
    if (bucketListItems.haveMicrowaved) {
        Instantiate(crossOut, new Vector3(-0.52, 0.65, -9), transform.rotation);                
        Instantiate(crossOut, new Vector3(-0.52, -0.05, -9), transform.rotation);                        
    }
    
}