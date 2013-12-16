var imageCounter = 0;
var images: Sprite[];
var isFading = true;
var isFadingIn = false;
var fadeValue: float;
var fadeTime: float = 2;
var fadeTimeElapsed: float = 0;
var switchingNewImage: boolean = false;

var dialogBox: GameObject;
var dialogScriptName: String = "IntroMovieDialogBox";

function Awake() {
    startFadeIn();
}

function Update() {
   var createdDialogBox;

    if (isFading) {
        fadeTimeElapsed += Time.deltaTime;
        
        if (fadeTimeElapsed <= fadeTime) {
            if (isFadingIn) {
                fadeValue = 0 + (fadeTimeElapsed / fadeTime);
            } else {
                fadeValue = 1 - (fadeTimeElapsed / fadeTime);
            }
            
            var sprite = GetComponent("SpriteRenderer");
            sprite.color = Color(1, 1, 1, fadeValue);
        } else {
            if (switchingNewImage) {
                if (isFadingIn) {
                    isFadingIn = false;
                    isFading = false;
                    if (GameObject.Find("ModeState").GetComponent("Mode").noMoreDialogBoxes) {
                        createdDialogBox = Instantiate(dialogBox, new Vector3(0, -3.8, 10), transform.rotation);                                    
                    } else {
                        createdDialogBox = Instantiate(dialogBox, new Vector3(0, -3.8, -9.5), transform.rotation);               
                    } 
                    createdDialogBox.GetComponent(dialogScriptName).step = imageCounter;
                } else {
                    isFadingIn = true;
                    GetComponent("SpriteRenderer").sprite = images[imageCounter];                    
                    startFadeIn();
                }
            } else {
                isFading = false;
                isFadingIn = false;
                    if (GameObject.Find("ModeState").GetComponent("Mode").noMoreDialogBoxes) {
                        createdDialogBox = Instantiate(dialogBox, new Vector3(0, -3.8, 10), transform.rotation);                                    
                    } else {
                        createdDialogBox = Instantiate(dialogBox, new Vector3(0, -3.8, -9.5), transform.rotation);               
                    } 
                createdDialogBox.GetComponent(dialogScriptName).step = imageCounter;
            }
        }        
    }
}

function OnMouseDown() {
    if (!isFading) {
        advance();
    }
}

function advance() {
	imageCounter++;
	if (imageCounter == images.length) {
	    //Application.LoadLevel("Overview");
	    GameObject.Find("ModeState").GetComponent("Mode").hasIntroMovieBeenWatched = true;
	    Destroy(gameObject);
	} else {
	    fadeSwitchNewImage();
	}

}

function startFadeIn() {
    isFading = true;
    isFadingIn = true;   
    fadeTimeElapsed = 0;
}

function startFadeOut() {
    isFading = true;
    isFadingIn = false;   
    fadeTimeElapsed = 0;
}



function fadeSwitchNewImage() {
    switchingNewImage = true;
    startFadeOut();
}