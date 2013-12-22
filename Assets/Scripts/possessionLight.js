var possessionLight: GameObject;

function addPL(targetPos: Vector3) {
    if (!GameObject.Find("PossessionLight(Clone)")) {
        Instantiate(possessionLight, new Vector3(targetPos.x-0.2, targetPos.y-2.8, targetPos.z-0.5), transform.rotation);      
    }       
}

function removePL() {
    Destroy(GameObject.Find("PossessionLight(Clone)"));
}