function OnMouseDown () {
    var bucketList = GameObject.FindGameObjectWithTag("bucketList");
    
    bucketList.transform.position.x = 5.5;
    bucketList.transform.position.y = -3;
    bucketList.transform.localScale.x = 0.45;
    bucketList.transform.localScale.y = 0.45;
    bucketList.GetComponent("BoxCollider2D").size.x = 8;
    bucketList.GetComponent("BoxCollider2D").size.y = 6;

    for (var crossOut: GameObject in GameObject.FindGameObjectsWithTag("crossout")) {
        Destroy(crossOut);
    }
            
    Destroy(gameObject);
}