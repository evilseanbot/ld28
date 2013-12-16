var exitBucketListPF: GameObject;

function OnMouseDown() {
    transform.position.x = 0;
    transform.position.y = 0.5;
    transform.localScale.x = 1.5;
    transform.localScale.y = 1.5;
    GetComponent("BoxCollider2D").size.x = 0;
    GetComponent("BoxCollider2D").size.y = 0;
    var exitBucketList = Instantiate(exitBucketListPF, new Vector3(-0.5, -3, -2.5), transform.rotation);
       
    
}