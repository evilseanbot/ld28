﻿var originalCursor : Texture2D;
 
var cursorSizeX: int = 32;  // set to width of your cursor texture
var cursorSizeY: int = 32;  // set to height of your cursor texture
var hoverTextBox: Texture2D;
var hoverTextBoxSizeX: int = 75;
var hoverTextBoxSizeY: int = 25;

var hoverText = "";
  
static var showOriginal : boolean = true;
 
function Start(){
    Screen.showCursor = false;
    //Screen.lockCursor = true;
}
 
 
function OnGUI(){
 
    if(showOriginal == true){
        GUI.DrawTexture (Rect(Input.mousePosition.x-cursorSizeX/2 + cursorSizeX/2, (Screen.height-Input.mousePosition.y)-cursorSizeY/2 + cursorSizeY/2, cursorSizeX, cursorSizeY),originalCursor);
        if (hoverText != "") {
            GUI.DrawTexture (Rect((Input.mousePosition.x-hoverTextBoxSizeX/2 + hoverTextBoxSizeX/2) - 5, ((Screen.height-Input.mousePosition.y)-hoverTextBoxSizeY/2 + hoverTextBoxSizeY/2) - 10, hoverTextBoxSizeX, hoverTextBoxSizeY), hoverTextBox);        
        }    
        GUI.color = Color.black;
        GUI.Label (Rect(Input.mousePosition.x-cursorSizeX/2 + cursorSizeX/2, ((Screen.height-Input.mousePosition.y)-cursorSizeY/2 + cursorSizeY/2)-10, 100, 100), hoverText);
        
    }
 
 
}