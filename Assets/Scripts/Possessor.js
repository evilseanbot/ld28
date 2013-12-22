var moving = false;
var currentTarget: Vector2;
var oldPos: Vector2;
var timeElapsed: float = 0;
var timeItTakes: float = 0.5;

function Update() {
    if (moving) {
        timeElapsed += Time.deltaTime;
        var xDiff = currentTarget.x - oldPos.x;
        var yDiff = currentTarget.y - oldPos.y;        
        var timeElapsedPortion = timeElapsed / timeItTakes; 
        transform.position.x = oldPos.x + (xDiff * timeElapsedPortion);
        transform.position.y = oldPos.y + (yDiff * timeElapsedPortion);        
        
        if (timeElapsed >= timeItTakes) {
            moving = false;
            timeElapsed = 0;
        }
    }
}


function possess(target: Vector2) {
   currentTarget = target;
   oldPos = transform.position;
   moving = true;
    anim = GetComponentInChildren(Animator);    
    anim.SetBool("isPosessing", true);
    GetComponent("possessionLight").addPL(currentTarget);
}

function unpossess(target: Vector2) {
    currentTarget = target;
    oldPos = transform.position;
    moving = true;
    anim = GetComponentInChildren(Animator);
    anim.SetBool("isPosessing", false);
    GetComponent("possessionLight").removePL();    
}
