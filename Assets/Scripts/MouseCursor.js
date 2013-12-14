var originalCursor : Texture2D;
 
var cursorSizeX: int = 32;  // set to width of your cursor texture
var cursorSizeY: int = 32;  // set to height of your cursor texture
 
static var showOriginal : boolean = true;
 
function Start(){
    Screen.showCursor = false;
    //Screen.lockCursor = true;
}
 
 
function OnGUI(){
 
    if(showOriginal == true){
        GUI.DrawTexture (Rect(Input.mousePosition.x-cursorSizeX/2 + cursorSizeX/2, (Screen.height-Input.mousePosition.y)-cursorSizeY/2 + cursorSizeY/2, cursorSizeX, cursorSizeY),originalCursor);
    }
 
 
}