function OnMouseDown () {
    var bucketList = GameObject.FindGameObjectWithTag("bucketList");
    
    bucketList.GetComponent("SpriteRenderer").sprite = bucketList.GetComponent("ClickToOpen").smallBL;
    
    bucketList.transform.position.x = -4.5;
    bucketList.transform.position.y = -3.5;
    bucketList.transform.localScale.x = 2;
    bucketList.transform.localScale.y = 2;
    bucketList.GetComponent("BoxCollider2D").size.x = 1;
    bucketList.GetComponent("BoxCollider2D").size.y = 1;

    for (var crossOut: GameObject in GameObject.FindGameObjectsWithTag("crossout")) {
        Destroy(crossOut);
    }
            
    Destroy(gameObject);
}